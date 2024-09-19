
import { ConnectDB } from '@/lib/config/db';
import Blog from '@/lib/models/Blogmodel';
import { mkdir, writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs'


//api-end point to get all blogs
export async function GET(request){

    try{ 
        await ConnectDB();
        //now we make some changes so that we can display individual blogs
        const blogId = request.nextUrl.searchParams.get('id'); //here we are ectracting the value of the queryParameter 'key' from the get request and storing it in the blogId
        if(blogId){
            const blog = await Blog.findById(blogId);
            return NextResponse.json(blog);
        }
        else{
        const blogs = await Blog.find({});
        return NextResponse.json(blogs);
        }
    }
    catch(e){
        console.log('error fetching' , e);
        return NextResponse.json({ message: 'Failed to fetch blogs', e: e.message }, { status: 500 })
    }
}



//Api end-point for uploading blogs

const uploadDirectory = path.join(process.cwd(), 'public');
//this function makes sure that the directory exists
async function ensureDirectoryExistence(filePath) {
    const dir = path.dirname(filePath);
    try {
        await mkdir(dir, { recursive: true });
    } catch (error) {
        console.error('Error creating directory:', error);
        throw new Error('Error creating directory');
    }
}

export async function POST(request){
    const formData = await request.formData(); //we will store our form data that we get from our post request
    const timeStamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    
    // Define file path
    const filePath = path.join(uploadDirectory, timeStamp.toString(), image.name);
    await ensureDirectoryExistence(filePath);

    // Write file to disk
    await writeFile(filePath, buffer);

    const imgUrl = `/${timeStamp}/${image.name}` ;
    console.log(imgUrl);
    

    const blogData = {
            title:`${formData.get('title')}`,
            description:`${formData.get('description')}`,
            category:`${formData.get('category')}`,
            author:`${formData.get('author')}`,
            image:`${imgUrl}`,
            authorImg:`${formData.get('authorImg')}`
    }

    await Blog.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({success:true , msg:'blog added'});

}

//creating api-endpoint to delete a blog
export async function DELETE(request){
    try{
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await Blog.findById(id);
    fs.unlink(`./public/${blog.image}`,()=>{}) //using this method the image will be deleted from the file system becayse whenever we create a new blog we are saving the image in the public folder and saving the url of that image in the database
    //now we wiil delete the blog from the database
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Deleted"})
    }
    catch(e){
        console.error("couldn't delete the blog from the database error" , e);
    }
    
}