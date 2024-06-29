import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = () => {
  const uri = "mongodb://127.0.0.1:27017"; // Directly hardcoding the MongoDB URI

  mongoose
    .connect(uri, {
      dbName: "MERN_STACK_JOB_SEEKING",
    })
    .then(() => {
      console.log("Connected to Database!");
    })
    .catch((err) => {
      console.log(
        `Some error occurred while connecting to the database: ${err}`
      );
    });
};
