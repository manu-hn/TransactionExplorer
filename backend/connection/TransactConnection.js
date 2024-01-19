import { connect } from "mongoose";
import { config } from "dotenv";
config();

connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected With MongoDB')
}).catch((error)=>{
    console.log(error)
});