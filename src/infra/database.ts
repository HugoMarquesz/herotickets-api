import mongoose from "mongoose";

export async function connect(){
  try {
    await mongoose.connect(
      'mongodb+srv://eldersovisk:lF4lso2pCifIfeET@cluster0.9uqagpc.mongodb.net/hero-tickets'
    );

    console.log('Connect database success');
    
  }catch(error){
    console.log(" ~ file: database.ts:5 ~ connect ~ error: ", error)
  }
}