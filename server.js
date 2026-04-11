const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// Models Import
const Event = require('./models/Event');
const User = require('./models/User');
const Registration = require('./models/Registration');
const ODRequest = require('./models/ODRequest');

const app = express();

// ==========================================
// MUKKIYAM: Image size prechanai varama thadukka intha 50mb limit thevai!
// ==========================================
app.use(cors()); 
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ✅ Static files serve பண்ண (index.html, styles.css, app.js)
app.use(express.static(__dirname));

// MongoDB Connection
const mongoURI = process.env.MONGO_URI; 

mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB Connected Successfully! 🟢"))
  .catch((err) => console.error("MongoDB Connection Error 🔴: ", err));

// ==========================================
// API ROUTES
// ==========================================

// ✅ Root route - index.html serve பண்ணும்
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
});

app.post('/api/events', async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: "Event created successfully!", event: newEvent });
  } catch (error) {
    // INGA THAAN ERROR PRINT AAGUM!
    console.error("\n❌ BACKEND POST ERROR DETAILS:");
    console.error(error); 
    res.status(500).json({ message: "Error saving event", error });
  }
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});