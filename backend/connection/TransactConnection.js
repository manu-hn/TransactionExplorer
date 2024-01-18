import { connect } from "mongoose";

connect('mongodb://127.0.0.1:27017/Transaction').then(()=>{
    console.log('Connected With MongoDB')
}).catch((error)=>{
    console.log(error)
});