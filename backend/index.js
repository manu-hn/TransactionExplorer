import express from "express";
import cors from "cors";
import { config } from "dotenv";
import "./connection/TransactConnection.js";
import TransactionRoutes from "./routes/Transaction.routes.js"

config();
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/transaction", TransactionRoutes);

app.use('*', (request, response) => {
    response.status(400).json({ error: true, message: 'Page not Found !' })
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})