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

// ✅ Events Routes
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
    console.error("\n❌ BACKEND POST ERROR DETAILS:");
    console.error(error); 
    res.status(500).json({ message: "Error saving event", error });
  }
});

// ==========================================
// 🚀 NEW ROUTES: Registration & OD Requests
// ==========================================

// 🟢 1. புது Registration-அ Save பண்ண (POST)
app.post('/api/register', async (req, res) => {
  try {
    const { eventId, studentId } = req.body;
    
    const newRegistration = new Registration({
      eventId,
      studentId,
      status: 'approved', // default status
      odApproved: false
    });

    const savedReg = await newRegistration.save(); 
    res.status(201).json({ success: true, message: "Registered Successfully", data: savedReg });
    
  } catch (error) {
    console.error("\n❌ Registration Error:", error);
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});
// 🔄 Profile Update பண்ண புது API
app.put('/api/user/update', async (req, res) => {
  try {
    const { userId, updatedData } = req.body;
    
    // Database-ல அந்த User-ஐ தேடி Update பண்றோம்
    const updatedUser = await User.findOneAndUpdate(
      { userId: userId }, 
      { $set: updatedData }, 
      { new: true } // Update ஆன புது data-வை திரும்ப தரும்
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "Profile updated in DB!", user: updatedUser });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// 🟢 2. புது OD Request-அ Save பண்ண (POST)
app.post('/api/od-request', async (req, res) => {
  try {
    const { studentId, eventId, registrationId, department } = req.body;
    
    const newOD = new ODRequest({
      studentId,
      eventId,
      registrationId,
      department,
      status: 'pending' // default status
    });

    const savedOD = await newOD.save(); 
    res.status(201).json({ success: true, message: "OD Requested Successfully", data: savedOD });
    
  } catch (error) {
    console.error("\n❌ OD Request Error:", error);
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});

// 🟢 3. Page Refresh ஆனதும் Database-ல இருந்து Data-வை எடுக்க (GET)
app.get('/api/registrations/:studentId', async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const registrations = await Registration.find({ studentId: studentId });
    res.status(200).json({ success: true, data: registrations });
  } catch (error) {
    console.error("\n❌ Fetch Registrations Error:", error);
    res.status(500).json({ success: false, message: "Error fetching data", error });
  }
});

// ==========================================
// 🔐 PUDHU LOGIN API (Database-ல செக் பண்ண)
// ==========================================
app.post('/api/auth/login', async (req, res) => {
  try {
    const { userId, password, role } = req.body;
    
    // Database-ல இந்த User இருக்காரான்னு செக் பண்றோம்
    const user = await User.findOne({ userId, password, role });

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid UserId or Password!" });
    }

    // Password-ஐ தவிர்த்து மத்த details-ஐ Frontend-க்கு அனுப்புறோம்
    const userDetails = {
      id: user.userId, 
      role: user.role,
      name: user.name,
      department: user.department,
      registerNumber: user.registerNumber,
      year: user.year,
      email: user.email,
      phone: user.phone,
      classIncharge: user.classIncharge
    };

    res.json({ success: true, user: userDetails });
  } catch (error) {
    console.error("Login API Error:", error);
    res.status(500).json({ success: false, message: "Server Error during login" });
  }
});

app.put('/api/user/update', async (req, res) => {
  try {
    const { userId, updatedData } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { userId: userId }, 
      { $set: updatedData }, 
      {returnDocument: 'after' }
    );
    if (!updatedUser) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ==========================================
// Server Start
// ==========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

