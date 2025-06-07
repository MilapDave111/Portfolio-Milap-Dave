import express from "express";
import Contact from "../models/contact.js";


const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const contact = new Contact({ name, email, message });
    await contact.save(); 
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save message." });
  }
});

export default router;
