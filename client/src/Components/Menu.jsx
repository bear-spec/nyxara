import { useState, useEffect } from "react";
import MenuItems from "./MenuItems";
import BelowItems from "./BelowItems";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

/*Fallback static data */
const LOCAL_CARS = [
  {
    name: "Luxury Sedan",
    type: "Sedan",
    price: 28000,
    desc: "A comfortable and elegant sedan designed for smooth city rides, offering premium interiors and advanced safety features.",
    img: "/images/sedan-1.png",
  },
  {
    name: "Premium Sedan",
    type: "Sedan",
    price: 32000,
    desc: "High-end sedan with superior performance, luxurious comfort, and cutting-edge technology.",
    img: "/images/sedan-2.png",
  },
  {
    name: "Sport Sedan",
    type: "Sedan",
    price: 35000,
    desc: "Sporty design with powerful engine and responsive handling.",
    img: "/images/sedan-3.png",
  },
  {
    name: "Urban SUV",
    type: "Suv",
    price: 38000,
    desc: "Compact SUV ideal for city driving and daily commutes.",
    img: "/images/suv-1.png",
  },
  {
    name: "Off-Road SUV",
    type: "Suv",
    price: 45000,
    desc: "Rugged SUV built for off-road adventures.",
    img: "/images/suv-2.png",
  },
  {
    name: "Adventure SUV",
    type: "Suv",
    price: 42000,
    desc: "Versatile SUV with spacious interiors.",
    img: "/images/suv-3.png",
  },
  {
    name: "Electric Hatchback",
    type: "Electric",
    price: 30000,
    desc: "Eco-friendly compact electric car.",
    img: "/images/electric-1.png",
  },
  {
    name: "Electric Sedan",
    type: "Electric",
    price: 40000,
    desc: "Sleek electric sedan with modern tech.",
    img: "/images/electric-2.png",
  },
  {
    name: "Electric SUV",
    type: "Electric",
    price: 48000,
    desc: "Spacious electric SUV with luxury interior.",
    img: "/images/electric-3.png",
  },
  {
    name: "Pickup Truck",
    type: "Pickups",
    price: 50000,
    desc: "Powerful pickup truck for heavy loads.",
    img: "/images/truck-1.png",
  },
];

function Menu() {
  const [menuData, setMenuData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(`${API_URL}/api/cars`);
        if (!res.ok) throw new Error("Backend not available");

        const data = await res.json();
        setMenuData(data);
      } catch (err) {
        console.warn("Using local car data");
        setMenuData(LOCAL_CARS); // ✅ fallback
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
        {filteredMenu.map((item, index) => (
          <MenuItems
            key={index}
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
