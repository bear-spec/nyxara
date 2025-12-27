import { useEffect, useState } from "react";
import AddCarForm from "../Components/AddCarForm";

function AdminPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchCars = async () => {
    try {
      const response = await fetch(`${API_URL}/api/cars`);
      if (!response.ok) {
        throw new Error("Failed to fetch cars");
      }
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Add New Car */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Add New Car</h2>
        <AddCarForm onSuccess={fetchCars} />
      </div>

      {/* Existing Cars */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Existing Cars</h2>

        {loading ? (
          <p>Loading cars...</p>
        ) : cars.length === 0 ? (
          <p>No cars found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cars.map((car) => (
              <div key={car._id} className="border p-4 rounded shadow">
                {car.img && (
                  <img
                    src={car.img}
                    alt={car.name}
                    className="h-40 w-full object-cover mb-2 rounded"
                  />
                )}
                <h3 className="text-lg font-bold">{car.name}</h3>
                <p>Type: {car.type}</p>
                <p>Price: ₹{car.price}</p>
                <p className="text-sm text-gray-600">{car.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
