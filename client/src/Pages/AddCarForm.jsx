import { useState } from "react";

const API_URL = "http://localhost:5000"; 

function AddCarForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    desc: "",
    img: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price), 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add car");
      }

      await response.json();

      alert("Car added successfully!");

      setFormData({
        name: "",
        type: "",
        price: "",
        desc: "",
        img: "",
      });

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error adding car:", error.message);
      alert("Failed to add car");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto p-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Car Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="type"
        placeholder="Car Type (Sedan, SUV, etc.)"
        value={formData.type}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="desc"
        placeholder="Description"
        value={formData.desc}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="img"
        placeholder="Image URL"
        value={formData.img}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Adding..." : "Add Car"}
      </button>
    </form>
  );
}

export default AddCarForm;
