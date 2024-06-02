const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://aadi:mongopass123@cluster0.lwjxmia.mongodb.net/VolunteerBridge?retryWrites=true&w=majority")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB:", err));

// Define two Ngo models
const ngoSchema1 = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  logo: String
});

const Ngo = mongoose.model('Ngo', ngoSchema1, 'NGOs');

const ngoSchema2 = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
  interests: String,
  skills: String,
  availability: String,
});

const NgoUser = mongoose.model('NgoUser', ngoSchema2);

// Register endpoint
app.post('/register', async (req, res) => {
  const { name, phone, email, password, interests, skills, availability } = req.body;

  try {
    // Check if the email already exists
    const ngoExists = await NgoUser.findOne({ email });
    if (ngoExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Save the ngo
    const newNgo = new NgoUser({ name, phone, email, password, interests, skills, availability });
    await newNgo.save();

    res.status(200).json({ message: 'Ngo registered successfully' });
  } catch (error) {
    console.error('Error registering ngo:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the ngo exists
    const ngo = await NgoUser.findOne({ email });

    if (!ngo) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if the password is correct
    if (ngo.password!== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // If email and password are correct, return success message
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all NGOs endpoint
app.get('/ngo', async (req, res) => {
  try {
    const ngos = await Ngo.find().exec();
    res.json(ngos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching NGOs" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});