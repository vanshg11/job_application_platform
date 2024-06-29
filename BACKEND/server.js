import app from "./app.js";
import cloudinary from "cloudinary";
const PORT = process.env.PORT || 4000;
cloudinary.config({
  cloud_name: "sec2",
  api_key: "sec1",
  api_secret: "sec",
});
// app.post("/api/v1/user/register", (req, res) => {
//   const { username, password } = req.body;
//   // Logic to handle user registration
//   res.status(201).json({ message: "User registered successfully", username });
// });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
