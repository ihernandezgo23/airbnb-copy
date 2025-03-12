import { useState } from "react";

export const Navbar = ({ language, changeLanguage }: { language: string, changeLanguage: (lang: string) => void }) => {
  const [selected, setSelected] = useState("Alojamientos");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const translations: { [key: string]: { alojamientos: string; experiencias: string; putYourHouse: string; esp: string; en: string; } } = {
    ESP: {
      alojamientos: "Alojamientos",
      experiencias: "Experiencias",
      putYourHouse: "Pon tu casa en Airbnb",
      esp: "🇪🇸 ESP",
      en: "🇬🇧 EN",
    },
    EN: {
      alojamientos: "Accommodations",
      experiencias: "Experiences",
      putYourHouse: "Put your house on Airbnb",
      esp: "🇪🇸 ESP",
      en: "🇬🇧 EN",
    }
  };

  const handleLanguageChange = (lang: string) => {
    if (translations[lang]) {
      changeLanguage(lang);
    } else {
      console.error("Idioma no disponible");
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-5 py-3">
      {/* Logo */}
      <a href="/">
        <img src="/logo.png" alt="airbnb logo" className="h-10" />
      </a>

      {/* Centro - Con selección */}
      <div className="flex ml-10 gap-10 items-center w-full md:w-auto justify-center md:justify-start mt-3 md:mt-0">
        <h3
          className={`cursor-pointer ${selected === translations[language].alojamientos ? "text-gray-900 font-bold" : "text-gray-400"}`}
          onClick={() => setSelected(translations[language].alojamientos)}
        >
          {translations[language].alojamientos}
        </h3>
        <h3
          className={`cursor-pointer ${selected === translations[language].experiencias ? "text-gray-900 font-bold" : "text-gray-400"}`}
          onClick={() => setSelected(translations[language].experiencias)}
        >
          {translations[language].experiencias}
        </h3>
      </div>

      {/* Derecha */}
      <div className="flex gap-5 items-center">
        <h3>{translations[language].putYourHouse}</h3>

        {/* Dropdown para cambiar idioma */}
        <div className="relative" id="browser-container">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-1 focus:outline-none">
            <img id="browser" src="/icons8-browser-100.png" className="h-6" alt="Browser" />
            <span className="text-sm font-medium">{language === 'ESP' ? 'ESP' : 'EN'}</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-lg">
              <ul className="py-2 text-gray-700">
                <li>
                  <button onClick={() => handleLanguageChange("ESP")} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    {translations["ESP"].esp}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLanguageChange("EN")} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    {translations["EN"].en}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Menú y usuario */}
        <div className="flex gap-2 p-2 items-center border rounded-full">
          <img id="menu" src="/icons8-menu-100.png" className="h-5" />
          <img id="user" src="/icons8-user-60.png" className="h-6 pl-1" />
        </div>
      </div>
    </header>
  );
};