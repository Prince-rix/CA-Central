const Razorpay = require("razorpay");
require("dotenv").config();

let razorpay = null;

// Enable Razorpay ONLY if real keys exist
if ( process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET && process.env.RAZORPAY_KEY_ID !== "xxxxxxx") {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  console.log("✅ Razorpay initialized");
} else {
  console.log("⚠️ Razorpay disabled — missing or placeholder credentials.");
}

module.exports = razorpay;
