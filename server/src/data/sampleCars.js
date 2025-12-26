import mongoose from "mongoose";
import dotenv from "dotenv";
import Car from "../models/car.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const cars = [
      { name: "Luxury Sedan", type: "Sedan", price: 28000, desc: "A comfortable and elegant sedan designed for smooth city rides, offering premium interiors and advanced safety features.", img: "/images/sedan-1.png" },
      { name: "Premium Sedan", type: "Sedan", price: 32000, desc: "High-end sedan with superior performance, luxurious comfort, and cutting-edge technology for an exceptional driving experience.", img: "/images/sedan-2.png" },
      { name: "Sport Sedan", type: "Sedan", price: 35000, desc: "Sporty design with a powerful engine, responsive handling, and a stylish interior perfect for dynamic and thrilling drives.", img: "/images/sedan-3.png" },
      
      { name: "Urban SUV", type: "Suv", price: 38000, desc: "Compact SUV ideal for city driving, providing comfort, convenience, and a smooth ride for families and daily commutes.", img: "/images/suv-1.png" },
      { name: "Off-Road SUV", type: "Suv", price: 45000, desc: "Rugged SUV built to handle tough terrains and off-road adventures, with durable construction and advanced 4x4 capabilities.", img: "/images/suv-2.png" },
      { name: "Adventure SUV", type: "Suv", price: 42000, desc: "Versatile SUV offering spacious interiors, ample cargo space, and the power needed for long journeys and outdoor activities.", img: "/images/suv-3.png" },
      
      { name: "Electric Hatchback", type: "Electric", price: 30000, desc: "Eco-friendly compact car powered by electricity, delivering efficiency, smooth rides, and modern connectivity features.", img: "/images/electric-1.png" },
      { name: "Electric Sedan", type: "Electric", price: 40000, desc: "Sleek electric sedan combining low emissions with advanced comfort, smart technology, and impressive driving range.", img: "/images/electric-2.png" },
      { name: "Electric SUV", type: "Electric", price: 48000, desc: "Spacious and sustainable electric SUV offering a luxurious interior, cutting-edge tech, and high performance for eco-conscious drivers.", img: "/images/electric-3.png" },
      
      { name: "Pickup Truck", type: "Pickups", price: 50000, desc: "Powerful pickup truck designed for heavy loads and rugged conditions, delivering reliability, durability, and off-road strength.", img: "/images/truck-1.png" }
    ];

    await Car.insertMany(cars);
    console.log("Sample cars inserted!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

connectDB();
