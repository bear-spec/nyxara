import Car from "../models/car.js"

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find()
    res.json(cars)
  } catch (error) {
    res.status(500).json({ message: "Server Error" })
  }
}

export const createCar = async (req, res) => {
  try {
    const { name, type, price, desc, img } = req.body

    if (!name || !type || !price) {
      return res.status(400).json({ message: "Name, type, and price are required" })
    }

    const newCar = await Car.create({ name, type, price, desc, img })

    res.status(201).json(newCar)
  } catch (error) {
    res.status(500).json({ message: "Server Error" })
  }
}
