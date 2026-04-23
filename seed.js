require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

const mongoURI = process.env.MONGO_URI;

const seedUsers = async () => {
  await mongoose.connect(mongoURI);
  console.log("🟢 MongoDB Connected for Seeding!");

  // பழைய students அழிக்கணும்
  await User.deleteMany({ role: "student" });
  console.log("🗑️ Old students deleted!");

  // ==========================================
  // CSE Department - 10 Sample Students
  // 8 Regular (CSR) + 2 Lateral (CSRL)
  // userId = Roll Number
  // Default password = Roll Number itself
  // ==========================================

  const students = [
    // REGULAR STUDENTS (8208E24CSR001 - 008)
    {
      userId: "8208E24CSR001",
      password: await bcrypt.hash("8208E24CSR001", 10),
      role: "student",
      name: "Harini A",
      registerNumber: "8208E24CSR001",
      department: "CSE",
      year: "I",
      email: "harini@gmail.com",
      phone: "+91 98765 00001",
      classIncharge: "Ms.Kalaivani",
    },
    {
      userId: "8208E24CSR002",
      password: await bcrypt.hash("8208E24CSR002", 10),
      role: "student",
      name: "Arun B",
      registerNumber: "8208E24CSR002",
      department: "CSE",
      year: "I",
      email: "arun@gmail.com",
      phone: "+91 98765 00002",
      classIncharge: "Ms.Kalaivani",
    },
    {
      userId: "8208E24CSR003",
      password: await bcrypt.hash("8208E24CSR003", 10),
      role: "student",
      name: "Divya C",
      registerNumber: "8208E24CSR003",
      department: "CSE",
      year: "I",
      email: "divya@gmail.com",
      phone: "+91 98765 00003",
      classIncharge: "Ms.Kalaivani",
    },
    {
      userId: "8208E24CSR004",
      password: await bcrypt.hash("8208E24CSR004", 10),
      role: "student",
      name: "Karthik D",
      registerNumber: "8208E24CSR004",
      department: "CSE",
      year: "I",
      email: "karthik@gmail.com",
      phone: "+91 98765 00004",
      classIncharge: "Ms.Kalaivani",
    },
    {
      userId: "8208E24CSR005",
      password: await bcrypt.hash("8208E24CSR005", 10),
      role: "student",
      name: "Meena E",
      registerNumber: "8208E24CSR005",
      department: "CSE",
      year: "I",
      email: "meena@gmail.com",
      phone: "+91 98765 00005",
      classIncharge: "Ms.Kalaivani",
    },
    {
      userId: "8208E24CSR006",
      password: await bcrypt.hash("8208E24CSR006", 10),
      role: "student",
      name: "Ravi F",
      registerNumber: "8208E24CSR006",
      department: "CSE",
      year: "I",
      email: "ravi@gmail.com",
      phone: "+91 98765 00006",
      classIncharge: "Ms.Kalaivani",
    },
    {
      userId: "8208E24CSR007",
      password: await bcrypt.hash("8208E24CSR007", 10),
      role: "student",
      name: "Sathya G",
      registerNumber: "8208E24CSR007",
      department: "CSE",
      year: "I",
      email: "sathya@gmail.com",
      phone: "+91 98765 00007",
      classIncharge: "Ms.Kalaivani",
    },
    {
      userId: "8208E24CSR008",
      password: await bcrypt.hash("8208E24CSR008", 10),
      role: "student",
      name: "Vignesh H",
      registerNumber: "8208E24CSR008",
      department: "CSE",
      year: "I",
      email: "vignesh@gmail.com",
      phone: "+91 98765 00008",
      classIncharge: "Ms.Kalaivani",
    },

    // LATERAL ENTRY STUDENTS (8208E24CSRL001 - 002)
    {
      userId: "8208E24CSRL001",
      password: await bcrypt.hash("8208E24CSRL001", 10),
      role: "student",
      name: "Priya I",
      registerNumber: "8208E24CSRL001",
      department: "CSE",
      year: "II",
      email: "priya.lateral@gmail.com",
      phone: "+91 98765 00009",
      classIncharge: "Ms.Kalaivani",
    },
    {
      userId: "8208E24CSRL002",
      password: await bcrypt.hash("8208E24CSRL002", 10),
      role: "student",
      name: "Surya J",
      registerNumber: "8208E24CSRL002",
      department: "CSE",
      year: "II",
      email: "surya.lateral@gmail.com",
      phone: "+91 98765 00010",
      classIncharge: "Ms.Kalaivani",
    },
  ];

  await User.insertMany(students);
  console.log(`🚀 ${students.length} CSE Students added Successfully!`);
  console.log("\n📋 Login Credentials:");
  console.log("   userId   = Roll Number (eg: 8208E24CSR001)");
  console.log("   password = Roll Number (same as userId)");
  console.log("\n   Regular  → 8208E24CSR001 to 8208E24CSR008");
  console.log("   Lateral  → 8208E24CSRL001 to 8208E24CSRL002");
  process.exit();
};

seedUsers().catch((err) => {
  console.error("🔴 Seed Error:", err);
  process.exit(1);
});