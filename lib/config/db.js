
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const dbURL = process.env.dbURL;

if (!dbURL) {
    throw new Error('MONGODB_URL is not set');
}


let isConnected = false;
mongoose.set('debug', true);


export const ConnectDB = async()=>{

    if (isConnected) {
        return;
    }

    try{
      await mongoose.connect(dbURL);
      console.log('DB connected');
      isConnected = true;
    }
    catch(e){
       console.log('error connecting DB' , e);
    }
    
}