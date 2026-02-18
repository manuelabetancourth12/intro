export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white w-80 rounded-xl shadow-lg overflow-hidden border border-red-400">
        
        {/* Imagen */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
          alt="Landscape"
          className="w-full h-48 object-cover"
        />

        {/* Contenido */}
        <div className="p-4 flex flex-col gap-3">
          <h2 className="text-lg font-bold text-gray-800">
            Red Heaven
          </h2>

          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque.
          </p>

          {/* Tags */}
          <div className="flex gap-2 mt-2">
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              #tailwind
            </span>
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              #frontend
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}