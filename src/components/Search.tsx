export const Search = ({ language }: { language: string }) => {
    const translations: { [key: string]: { destino: string; llegada: string; salida: string; huespedes: string; search: string; addDate: string; addGuests: string; } } = {
      ESP: {
        destino: "Destino",
        llegada: "Llegada",
        salida: "Salida",
        huespedes: "Huéspedes",
        search: "Buscar destinos",
        addDate: "Agregar fecha",
        addGuests: "¿Cuántos?",
      },
      EN: {
        destino: "Destination",
        llegada: "Arrival",
        salida: "Departure",
        huespedes: "Guests",
        search: "Search destinations",
        addDate: "Add date",
        addGuests: "How many?",
      }
    };
  
    return (
      <div className="flex justify-center items-center pt-5">
        <div className="flex items-center bg-white shadow-lg rounded-full p-2 max-w-2xl mx-auto">
          {/* Destino */}
          <div className="flex flex-col px-4">
            <span className="text-sm font-semibold">{translations[language].destino}</span>
            <span className="text-gray-500 text-sm">{translations[language].search}</span>
          </div>
  
          {/* Separador */}
          <div className="h-6 w-px bg-gray-300"></div>
  
          {/* Llegada */}
          <div className="flex flex-col px-4">
            <span className="text-sm font-semibold">{translations[language].llegada}</span>
            <span className="text-gray-500 text-sm">{translations[language].addDate}</span>
          </div>
  
          {/* Separador */}
          <div className="h-6 w-px bg-gray-300"></div>
  
          {/* Salida */}
          <div className="flex flex-col px-4">
            <span className="text-sm font-semibold">{translations[language].salida}</span>
            <span className="text-gray-500 text-sm">{translations[language].addDate}</span>
          </div>
  
          {/* Separador */}
          <div className="h-6 w-px bg-gray-300"></div>
  
          {/* Huéspedes */}
          <div className="flex flex-col px-4 pr-15">
            <span className="text-sm font-semibold">{translations[language].huespedes}</span>
            <span className="text-gray-500 text-sm">{translations[language].addGuests}</span>
          </div>
  
          {/* Botón de búsqueda */}
          <button className="bg-red-500 text-white p-3 rounded-full ml-auto">
            <img id="search" src="/icons8-search-100.png" alt="" />
          </button>
        </div>
      </div>
    );
  };  