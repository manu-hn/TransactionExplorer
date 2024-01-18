import TransactionModel from "../models/Transactions.model.js";
import { config } from "dotenv";
import axios from "axios";


config()

const apiInstance = axios.create({

});

export const initializeDatabase = async (request, response, next) => {
    try {
        const apiResponse = await apiInstance.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        console.log(apiResponse.data);
        const data = await TransactionModel.insertMany(apiResponse.data);


        response.status(200).json({
            error: false, message: `Data Inserted Successfully ! `, userData: {
                total: data.length,
                data
            }
        })

    } catch (error) {
        console.error('Axios Error:', error);
        response.status(500).json({ error: true, message: 'Internal Server Error' });
        next(error);
    }
};


export const fetchBasedOnQuery = async (request, response, next) => {
    try {

        const { search, page, limitPerPage } = request.query

        let queryObject = search ?
            {
                $or: [
                    { title: { $regex: search, $options: 'i' } },
                    { description: { $regex: search, $options: 'i' } },
                    { price: parseFloat(search) || null },
                ],
            }
            : {}

        const options = {
            skip: (parseInt(page) - 1) * parseInt(limitPerPage),
            limit: parseInt(limitPerPage),
        };


        const transactions = await TransactionModel.find(queryObject, {}, options);
        console.log(transactions)
        response.status(200).json({
            error: false, message: "Fetched Successfully", data: {
                total: transactions.length,
                transactions
            }
        });

    } catch (error) {
        response.status(500).json({ success: false, message: 'Internal Server Error' });
        next(error);
    }
}

export const fetchBasedOnStatistics = async (request, response, next) => {
    try {
        const { month } = request.query;

        const selectedMonth = parseInt(month);

        const transactions = await TransactionModel.find({
            $expr: {
                $eq: [{ $month: '$dateOfSale' }, selectedMonth],
            }
        });

        response.status(200).json({error : false, message : `Displaying the Sales Data of Month ${selectedMonth}`, data :{
            total : transactions.length,
            transactions
        }})

    } catch (error) {

        next(error)
    }
}