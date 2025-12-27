import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function MenuItems({ name, desc, price, img }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="mt-20 group">
      <div className="relative bg-[#222831] rounded-3xl w-[361px] h-[420px] overflow-hidden shadow-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl">
        
        <div className="bg-[#f1f2f3] h-[200px] flex items-center justify-center">
          <img
            src={img}
            alt={name}
            className="h-[160px] object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="px-6 pt-4 text-blue-50">
          <h1 className="text-xl font-semibold tracking-wide">
            {name}
          </h1>

          <p className="text-sm text-gray-300 mt-2 leading-relaxed">
            {desc}
          </p>

          <div className="flex items-center justify-between mt-5">
            <span className="text-lg font-bold text-amber-400">
              {price}
            </span>

            <button
              onClick={() => setLiked(!liked)}
              className="w-9 h-9 rounded-full bg-[#393e46] flex items-center justify-center transition-colors duration-300 hover:bg-[#ff4d4d]"
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={`transition-colors duration-300 ${
                  liked ? "text-red-500" : "text-white"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
