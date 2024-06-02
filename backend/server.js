const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const NgoModel = require('./models/Ngo');

const app = express();
app.use(cors());
app.use(express.json()); // Add parentheses to call the middleware

mongoose.connect("mongodb+srv://aadi:mongopass123@cluster0.lwjxmia.mongodb.net/?retryWrites=true&w=majority")
 .then(() => console.log("Connected to MongoDB"))
 .catch(err => console.error("Error connecting to MongoDB:", err));

app.get('/ngo', async (req, res) => {
  try {
    const NGOs = await NgoModel.find();
    res.json(NGOs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching NGOs" });
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});