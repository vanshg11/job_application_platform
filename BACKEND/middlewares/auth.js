import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";
import ErrorHandler from "./error.js";

const JWT_SECRET_KEY = "youmfuckerhello"; // Replace with your actual secret key

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  try {
    const decodedData = jwt.verify(token, JWT_SECRET_KEY); // Use the hardcoded secret key here
    req.user = await User.findById(decodedData.id);

    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid Token, please login again", 401));
  }
};
