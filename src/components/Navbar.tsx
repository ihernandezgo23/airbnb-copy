import { useState } from "react";

export const Navbar = () => {
  const [selected, setSelected] = useState("Alojamientos");

  return (
    <header className="flex flex-wrap justify-between items-center px-5 py-3">
      {/* Logo */}
      <a href="/">
        <img
          src="/logo.png"
          alt="airbnb logo"
          className="h-10"
        />
      </a>

      {/* Centro - Con selección */}
      <div className="flex ml-10 gap-10 items-center w-full md:w-auto justify-center md:justify-start mt-3 md:mt-0">
        <h3
          className={`cursor-pointer ${selected === "Alojamientos" ? "text-gray-900 font-bold" : "text-gray-400"}`}
          onClick={() => setSelected("Alojamientos")}
        >
          Alojamientos
        </h3>
        <h3
          className={`cursor-pointer ${selected === "Experiencias" ? "text-gray-900 font-bold" : "text-gray-400"}`}
          onClick={() => setSelected("Experiencias")}
        >
          Experiencias
        </h3>
      </div>

      {/* Derecha */}
      <div className="flex gap-5 items-center">
        <h3>Pon tu casa en Airbnb</h3>
        <img id="browser" src="/icons8-browser-100.png" className="h-6" />

        <div className="flex gap-2 p-2 items-center border rounded-full">
          <img id="menu" src="/icons8-menu-100.png" className="h-5" />
          <img id="user" src="/icons8-user-60.png" className="h-6 pl-1" />
        </div>
      </div>
    </header>
  );
};