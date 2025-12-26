import express from "express";
import Car from "../models/car.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, type, price, desc, img } = req.body;

    if (!name || !type || !price) {
      return res.status(400).json({ message: "Name, type, and price are required" });
    }

    const newCar = new Car({ name, type, price, desc, img });
    const savedCar = await newCar.save();

    res.status(201).json(savedCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
