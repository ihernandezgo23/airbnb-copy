import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import { HouseCard } from './components/HouseCard';

function App() {
  interface House {
    imageSrc: string;
    location: string;
    distance: string;
    dates: string;
    price: string;
    rating: string;
  }

  const [houses, setHouses] = useState<House[]>([]);
  const [visibleHouses, setVisibleHouses] = useState<number>(4); // Limit to 8 houses initially
  const [language, setLanguage] = useState<string>('ESP');

  // Función para cambiar el idioma
  const changeLanguage = (lang: string) => {
    console.log(`Cambiando idioma a: ${lang}`);
    setLanguage(lang);
  };

  // Cargar las casas desde el archivo JSON
  useEffect(() => {
    fetch('/api/houses.json')
      .then(response => response.json())
      .then(data => setHouses(data))
      .catch(error => console.error('Error:', error));
  }, []);

  // Función para traducir texto del botón según el idioma
  const getButtonText = (key: 'showMore' | 'seeMap') => {
    const translations: { [key: string]: { showMore: string; seeMap: string } } = {
      ESP: {
        showMore: 'Más casas',
        seeMap: 'Ver Mapa',
      },
      ENG: {
        showMore: 'Show More',
        seeMap: 'See Map',
      },
    };

    // Fallback a ESP si el idioma no existe
    return translations[language] ? translations[language][key] : translations['ESP'][key];
  };

  // Función para cargar más casas
  const loadMoreHouses = () => {
    setVisibleHouses(prev => Math.min(prev + 8, houses.length));
  };

  // Effect to force re-render when language changes
  useEffect(() => {
    // Triggers a re-render when the language changes
  }, [language]);

  return (
    <>
      <Navbar language={language} changeLanguage={changeLanguage} />
      <Search language={language} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {houses.slice(0, visibleHouses).map((house, index) => (
          <HouseCard
            key={index}
            imageSrc={house.imageSrc}
            location={house.location}
            distance={house.distance}
            dates={house.dates}
            price={house.price}
            rating={house.rating}
          />
        ))}
      </div>

      {visibleHouses < houses.length && (
        <div className="flex items-center justify-center">
          <button
            onClick={loadMoreHouses}
            className="bg-black text-white px-4 py-2 rounded-xl hover:scale-110 transition-transform duration-300"
          >
            {getButtonText('showMore')}
          </button>
        </div>
      )}

      <button
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center gap-2"
      >
        {getButtonText('seeMap')}
        <img src="/icons8-map-48.png" alt="Mapa" className="w-6 h-6" />
      </button>
    </>
  );
}

export default App;