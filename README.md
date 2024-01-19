# Transaction Explorer Backend


## Tech Stack

1. **Node.js / Express.js:** .

2. **MongoDB:** 

## Libraries Used

1. **mongoose:** Used to establish a connection with MongoDB, providing a simple and efficient way to interact with the database.

2. **axios:** Used to make HTTP requests, facilitating communication with external APIs if needed.

3. **dotenv:** Used to load and use environmental variables, ensuring secure configuration of sensitive data.

4. **cors:** Implemented to enable Cross-Origin Resource Sharing (CORS) permissions, allowing controlled access to the backend from different origins.

5. **nodemon:** Integrated for automatic code monitoring during the development process, enabling real-time updates.

## Getting Started

Follow the steps below to set up and run the backend:

1. *Clone the Repository:* - git clone https://github.com/manu-hn/TransactionExplorer.git
2. *Navigate to the project directory:* - cd backend or open the directory in VS code
3. *Install dependencies:* - run the `npm install` command to install all the dependencies required for the project
4. *Configure ENV Variables::* - `PORT`=your_desired_port_number, `MONGO_URL`=your_mongo_connection_url
5. *Start the server:* -run the command `npm run dev` The server will start on the specified port, and you should see a confirmation message in the terminal as shown in below image.
![Alt Text]('./backend.png')
