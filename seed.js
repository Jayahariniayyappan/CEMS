require('dotenv').config(); // உங்க .env file-ல் இருந்து DB URL-ஐ எடுக்க இது தேவை
const mongoose = require('mongoose');
const User = require('./models/User'); // Path சரியா இருக்கணும்

// நீங்க அனுப்புன அதே Hardcoded Data 
const students = [
  {
    userId: "stu001",
    password: "student123",
    role: "student",
    name: "Harini A",
    registerNumber: "CSE2023-001",
    department: "CSE",
    year: "III",
    email: "harini28.egspec@gmail.com",
    phone: "+91 98765 00011",
    classIncharge: "Ms.Kalaivani",
  },
  {
    userId: "stu002",
    password: "student123",
    role: "student",
    name: "Lakshana S",
    registerNumber: "ECE2023-014",
    department: "ECE",
    year: "II",
    email: "lakshana@gmail.com",
    phone: "+91 98765 00012",
    classIncharge: "Ms.Mohanapriya",
  },
  {
    userId: "stu003",
    password: "student123",
    role: "student",
    name: "Sahithyalakshmi S",
    registerNumber: "MECH2023-023",
    department: "MECH",
    year: "III",
    email: "sahithya@gmail.com",
    phone: "+91 98765 00013",
    classIncharge: "Ms.Ranjani",
  },
];

// MongoDB-யோட Connect பண்ணி Data-வை Save பண்றோம்
const mongoURI = "mongodb+srv://harini28egspec_db_user:oxQzpQMmafPAGsaj@cluster0.xrilt8p.mongodb.net/cems?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
.then(async () => {
  console.log("🟢 MongoDB Connected for Seeding!");
  
  // பழைய Data ஏதாச்சும் இருந்தா அத அழிச்சிட்டு புதுசா ஏத்துறோம்
  await User.deleteMany({ role: "student" }); 
  
  // புது Data-வை Database-ல Insert பண்றோம்
  await User.insertMany(students);
  
  console.log("🚀 All Students added to Database Successfully!");
  process.exit(); // வேலை முடிஞ்சதும் Script-ஐ close பண்ணிடும்
})
.catch((err) => {
  console.error("🔴 Error:", err);
  process.exit(1);
});