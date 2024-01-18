import {Schema, model} from "mongoose"


const TransactionSchema=new Schema({
    id : {
        type : Number,
        required : true,
     },
     title : {
        type : String,
        required : true
     },
     price : {
        type:Number,
        required:true
     },
     description : {
        type : String,
        required : true
     },
     category : {
        type : String,
        required : true
     },
     image : {
        type : String,
        required : true
     },
     sold : {
        type : Boolean,
        required : true
     },
     dateOfSale : {
        type : Date,
        required : true
     }

});

const TransactionModel= model('transaction', TransactionSchema);

export default TransactionModel;