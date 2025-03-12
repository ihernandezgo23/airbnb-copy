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
  const [language, setLanguage] = useState<string>('ESP');

  useEffect(() => {
    fetch('/api/houses.json') 
      .then(response => response.json())
      .then(data => setHouses(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <>
      <Navbar language={language} changeLanguage={changeLanguage} />
      <Search language={language} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {houses.map((house, index) => (
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

      <button
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center gap-2"
      >
        Ver Mapa
        <img src="/icons8-map-48.png" alt="Mapa" className="w-6 h-6" />
      </button>
    </>
  );
}

export default App;