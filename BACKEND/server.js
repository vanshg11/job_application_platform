import app from "./app.js";
import cloudinary from "cloudinary";
const PORT = process.env.PORT || 4000;
cloudinary.config({
  cloud_name: "dwb76ojmv",
  api_key: "383994124972961",
  api_secret: "2zB4oiPsj_WDyeYh0v7Lr0MwEII",
});
// app.post("/api/v1/user/register", (req, res) => {
//   const { username, password } = req.body;
//   // Logic to handle user registration
//   res.status(201).json({ message: "User registered successfully", username });
// });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
