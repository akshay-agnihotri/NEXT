import Link from "next/link";
import { FaComment, FaStar } from "react-icons/fa";

const movies = [
  {
    id: "m1",
    title: "Echoes of Tomorrow",
    comments: 124,
    ratings: 4.3,
    description:
      "In a world where memories are currency, a rogue scientist uncovers a future he never expected.",
  },
  {
    id: "m2",
    title: "Skyfire Protocol",
    comments: 89,
    ratings: 3.8,
    description:
      "A tech billionaire launches a secret satellite that controls the weather — but not the consequences.",
  },
  {
    id: "m3",
    title: "Neon Nights",
    comments: 203,
    ratings: 4.7,
    description:
      "A detective in a cyberpunk city must solve a string of virtual murders that feel all too real.",
  },
  {
    id: "m4",
    title: "Frostborne",
    comments: 52,
    ratings: 3.5,
    description:
      "An ancient warrior awakens in the Arctic, only to find a world frozen by fear and secrets.",
  },
  {
    id: "m5",
    title: "The Quantum Heist",
    comments: 174,
    ratings: 4.1,
    description:
      "A group of thieves attempt to rob a time-travel vault — but one of them isn’t from this timeline.",
  },
  {
    id: "m6",
    title: "Beneath Crimson Skies",
    comments: 97,
    ratings: 3.9,
    description:
      "A pilot haunted by his past uncovers a forgotten war buried in the clouds.",
  },
  {
    id: "m7",
    title: "Digital Eden",
    comments: 310,
    ratings: 4.8,
    description:
      "When reality is uploaded, who decides what paradise looks like?",
  },
  {
    id: "m8",
    title: "Wraith Signal",
    comments: 61,
    ratings: 3.6,
    description:
      "After picking up a mysterious radio signal, a rural town starts experiencing paranormal events.",
  },
  {
    id: "m9",
    title: "The Hollow Clock",
    comments: 141,
    ratings: 4.0,
    description:
      "A timekeeper discovers that his clocks can rewind regret — but only once.",
  },
  {
    id: "m10",
    title: "Mirage Code",
    comments: 212,
    ratings: 4.4,
    description:
      "An ex-hacker stumbles upon a secret algorithm that can erase people from history.",
  },
];

const totalMovies = movies.length;
const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
const averageRating = (
  movies.reduce((sum, movie) => sum + movie.ratings, 0) / totalMovies
).toFixed(2);

export default function Home() {
  return (
    <div className="p-8 space-y-8 bg-gray-900  min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Dashboard Overview
        </h2>

        <div className="grid gri-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Movies</p>
            <p className="text-4xl font-bold">{totalMovies}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Comments</p>
            <p className="text-4xl font-bold">{totalComments}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Average Rating</p>
            <p className="text-4xl font-bold">{averageRating}</p>
          </div>
        </div>
      </div>
      {/* Movie List */}
      <h2 className="text-3xl font-semibold text-white">Movie list</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link
              className="text-2xl font-bold text-blue-400 hover:text-blue-600"
              href={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>

            <p className="text-gray-400 text-sm mt-2">{movie.description}</p>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-sm text-gray-300">
                <FaComment className="mr-1" />
                <span>{movie.comments}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <FaStar className="mr-1" />
                <span>{movie.ratings}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
