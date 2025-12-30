import { useState, useEffect } from "react";
import MenuItems from "./MenuItems";
import BelowItems from "./BelowItems";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

function Menu() {
  const [menuData, setMenuData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_URL}/api/cars`);
        if (!res.ok) {
          throw new Error("Failed to fetch cars");
        }

        const data = await res.json();
        setMenuData(data);
      } catch (err) {
        console.error("Error fetching cars:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filteredMenu =
    activeCategory === "All"
      ? menuData
      : menuData.filter((item) => item.type === activeCategory);

  if (loading) {
    return (
      <h2 className="text-center text-2xl mt-10">
        Loading cars...
      </h2>
    );
  }

  return (
    <>
      <h1
        style={{ fontFamily: "'Dancing Script', cursive" }}
        className="flex justify-center text-5xl"
      >
        Featured Cars
      </h1>

      <ul className="mt-10 flex justify-center gap-12 text-[18px] font-sans">
        {["All", "Sedan", "Suv", "Electric", "Pickups"].map((type) => (
          <li
            key={type}
            onClick={() => setActiveCategory(type)}
            className={`cursor-pointer w-[80px] h-8 pt-1 rounded-2xl flex justify-center items-center transition-all duration-500
              ${
                activeCategory === type
                  ? "bg-[#222831] text-blue-50"
                  : "text-black"
              }`}
          >
            {type}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-8 justify-center mt-10">
        {filteredMenu.map((item) => (
          <MenuItems
            key={item._id}
            name={item.name}
            desc={item.desc}
            price={`₹${item.price}`}
            img={item.img}
          />
        ))}
      </div>

      <div className="pt-10 pb-24 w-full flex justify-center">
        <button className="text-neutral-800 bg-amber-300 rounded-3xl w-[150px] h-12 mb-10">
          View More
        </button>
      </div>
    </>
  );
}

export default Menu;
