'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const page = () => {

    const [image , setImage] = useState(false);
    const [data , setData] = useState({
        title:"",
        description:"",
        category:"Startup",
        author:"Bony Bennet",
        authorImg:"/author_img.png"
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
        console.log(data);

    }

    const onSubmitHandler = async(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('category',data.category);
        formData.append('author',data.author);
        formData.append('authorImg',data.authorImg);
        formData.append('image',image);
        try {
            const response = await axios.post('/api/blog', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
    
            if (response.data.success === true) {
                toast.success('Blog added successfully');
                setImage(null);
                setData({
                    title: "",
                    description: "",
                    category: "Startup",
                    author: "Bony Bennet",
                    authorImg: "/author_img.png"
                });
            } else {
                toast.error('Error adding blog');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('An error occurred');
        }
    }

    return (
        <>
            <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl'>Upload thumbnail</p>
                <label htmlFor="image">
                    <Image className='mt-4' src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt=''/> {/*URL.createObjectURL(image) is a JavaScript function that creates a temporary URL for a file or Blob object, which you can then use to display or interact with the file in a web application */}
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
                <p className='text-xl mt-4'>Blog title</p>
                <input name='title' onChange={onChangeHandler} value={data.title} type="text" className='w-full sm:w-[500px] mt-4 px-4 py-3 border' placeholder='Type here' required/>
                <p className='text-xl mt-4'>Blog description</p>
                <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" className='w-full sm:w-[500px] mt-4 px-4 py-3 border' placeholder='write content here' required rows={6}/>
                <p className='text-xl mt-4'>Blog category</p>
                <select onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500 mb-8' name="category">
                    <option value="Startup">Startup</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                </select>
                <br />
                <button type='submit' className='mt-8 mb-8 w-40 h-12 bg-black text-white '>Add</button>
            </form>
        </>
    )
}

export default page