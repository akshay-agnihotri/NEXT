import { games } from "@/data/games";
import Link from "next/link";
import Image from "next/image";

const GamePage = () => {
  return (
    <div className="px-6 py-8 bg-gray-950 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Games</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {games.map((game) => (
          <Link
            href={`/games/${game.category}/${game.slug}`}
            key={game.id}
            className="block bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-800"
          >
            <Image
              width={400}
              height={250}
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
              <p className="text-sm text-gray-400 mb-3 line-clamp-3">
                {game.description}
              </p>
              <p className="text-yellow-400 font-medium">⭐ {game.rating}/5</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
