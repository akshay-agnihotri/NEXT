import { games } from "@/data/games";
import { FaStar, FaCalendarAlt, FaGamepad, FaDesktop } from "react-icons/fa";
import Image from "next/image";

const MainGamePage = async ({ params }: { params: { slug: string[] } }) => {
  const [category, gameSlug] = params.slug;

  const game = games.find(
    (game) => game.category === category && game.slug === gameSlug
  );

  if (!game) {
    return <h1>Game Not Found</h1>;
  }

  return (
    <div className="px-8 py-12 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      {/* Banner Section */}
      <div className="relative max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl">
        <Image
          src={game.image}
          alt={game.title}
          width={1400}
          height={500}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-transparent bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            {game.title}
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-center mt-8">
        <p className="text-gray-600 text-lg">{game.description}</p>
      </div>

      {/* Info Cards */}
      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white">
        <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-2 shadow-md">
          <FaStar className="text-yellow-400 text-xl" />
          <span>Rating: {game.rating}/10</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-2 shadow-md">
          <FaCalendarAlt className="text-blue-400 text-xl" />
          <span>Release Date: {game.releaseDate}</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-2 shadow-md">
          <FaGamepad className="text-green-400 text-xl" />
          <span>Developer: {game.developer}</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-2 shadow-md">
          <FaDesktop className="text-pink-400 text-xl" />
          <span>Platforms: {game.platforms.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

export default MainGamePage;
