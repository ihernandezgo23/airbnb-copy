export const Search = () => {
    return (
      <div className="flex justify-center items-center pt-5">
        <div className="flex items-center bg-white shadow-lg rounded-full p-2 max-w-2xl mx-auto">
          {/* Destino */}
          <div className="flex flex-col px-4">
              <span className="text-sm font-semibold">Destino</span>
              <span className="text-gray-500 text-sm">Buscar destinos</span>
          </div>

          {/* Separador */}
          <div className="h-6 w-px bg-gray-300"></div>

          {/* Llegada */}
          <div className="flex flex-col px-4">
              <span className="text-sm font-semibold">Llegada</span>
              <span className="text-gray-500 text-sm">Agregar fecha</span>
          </div>

          {/* Separador */}
          <div className="h-6 w-px bg-gray-300"></div>

          {/* Salida */}
          <div className="flex flex-col px-4">
              <span className="text-sm font-semibold">Salida</span>
              <span className="text-gray-500 text-sm">Agregar fecha</span>
          </div>

          {/* Separador */}
          <div className="h-6 w-px bg-gray-300"></div>

          {/* Huéspedes */}
          <div className="flex flex-col px-4 pr-15">
              <span className="text-sm font-semibold">Huéspedes</span>
              <span className="text-gray-500 text-sm">¿Cuántos?</span>
          </div>

          {/* Botón de búsqueda */}
          <button className="bg-red-500 text-white p-3 rounded-full ml-auto">
            <img id="search" src="/icons8-search-100.png" alt="" />
          </button>
        </div>
      </div>
    );
};