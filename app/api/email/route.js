import { ConnectDB } from "@/lib/config/db";
import Email from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";


export async function POST(request){
    await ConnectDB();
    try{
     const formData = await request.formData();
     const emailData = {
         email:`${formData.get('email')}`,

     }

     await Email.create(emailData);
     return NextResponse.json({success:true,msg:"email Subscribed"})
    }
    catch(e){
        console.error('error',e);
    }
}

export async function GET(request){
    await ConnectDB();
    try{
    const emails = await Email.find({});
    return NextResponse.json({emails}); 
    }
    catch(e){
        console.error("error fetching Email" , e); 
    }
}

export async function DELETE(request){
    await ConnectDB();
    try{
        const id = await request.nextUrl.searchParams.get("id");
        await Email.findByIdAndDelete(id);
        return NextResponse.json({success:true , msg:"email deleted"})
    }
    catch(e){
        console.error("error deleting email" , e);
    }
}