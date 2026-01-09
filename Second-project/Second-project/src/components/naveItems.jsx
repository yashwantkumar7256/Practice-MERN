import { useState } from "react";


const navItems = ["Home", "Menu", "About", "Gallery", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-600">🍽️ FoodZone</h1>

      {/* Menu */}
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className="relative cursor-pointer text-gray-700 font-medium"
          >
            {item}

            {/* underline */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300
              ${
                active === item
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

