import { FaStar } from "react-icons/fa";

const movies = [
  {
    id: "m1",
    title: "Echoes of Tomorrow",
    comments: 124,
    ratings: 4.3,
    description:
      "In a world where memories are currency, a rogue scientist uncovers a future he never expected.",
    commentsList: [
      "Mind-blowing concept!",
      "Really makes you think.",
      "The twist at the end was crazy!",
    ],
  },
  {
    id: "m2",
    title: "Skyfire Protocol",
    comments: 89,
    ratings: 3.8,
    description:
      "A tech billionaire launches a secret satellite that controls the weather — but not the consequences.",
    commentsList: [
      "Loved the visuals!",
      "Plot was a bit slow in the middle.",
      "Interesting take on climate control.",
    ],
  },
  {
    id: "m3",
    title: "Neon Nights",
    comments: 203,
    ratings: 4.7,
    description:
      "A detective in a cyberpunk city must solve a string of virtual murders that feel all too real.",
    commentsList: [
      "Best cyberpunk story since Blade Runner.",
      "The music and vibes were perfect.",
      "Couldn’t stop watching!",
    ],
  },
  {
    id: "m4",
    title: "Frostborne",
    comments: 52,
    ratings: 3.5,
    description:
      "An ancient warrior awakens in the Arctic, only to find a world frozen by fear and secrets.",
    commentsList: [
      "Cold visuals, warm story.",
      "Felt slow in parts but beautiful to look at.",
      "Loved the ancient legend aspect.",
    ],
  },
  {
    id: "m5",
    title: "The Quantum Heist",
    comments: 174,
    ratings: 4.1,
    description:
      "A group of thieves attempt to rob a time-travel vault — but one of them isn’t from this timeline.",
    commentsList: [
      "Ocean's Eleven meets Interstellar!",
      "Very clever time loops.",
      "Who was the real mastermind?",
    ],
  },
  {
    id: "m6",
    title: "Beneath Crimson Skies",
    comments: 97,
    ratings: 3.9,
    description:
      "A pilot haunted by his past uncovers a forgotten war buried in the clouds.",
    commentsList: [
      "Very emotional.",
      "Strong lead performance.",
      "Could’ve used more action scenes.",
    ],
  },
  {
    id: "m7",
    title: "Digital Eden",
    comments: 310,
    ratings: 4.8,
    description:
      "When reality is uploaded, who decides what paradise looks like?",
    commentsList: [
      "Absolutely stunning concept.",
      "Blew my mind!",
      "A bit confusing at first but worth it.",
    ],
  },
  {
    id: "m8",
    title: "Wraith Signal",
    comments: 61,
    ratings: 3.6,
    description:
      "After picking up a mysterious radio signal, a rural town starts experiencing paranormal events.",
    commentsList: [
      "Creepy and mysterious!",
      "Felt like Stranger Things.",
      "Loved the atmosphere.",
    ],
  },
  {
    id: "m9",
    title: "The Hollow Clock",
    comments: 141,
    ratings: 4.0,
    description:
      "A timekeeper discovers that his clocks can rewind regret — but only once.",
    commentsList: [
      "Very thought-provoking.",
      "Would you rewind your life?",
      "Emotional ending!",
    ],
  },
  {
    id: "m10",
    title: "Mirage Code",
    comments: 212,
    ratings: 4.4,
    description:
      "An ex-hacker stumbles upon a secret algorithm that can erase people from history.",
    commentsList: [
      "Dark and intriguing.",
      "Plot was tight and thrilling.",
      "Loved the hacker vibe!",
    ],
  },
];

const page = ({ params }: { params: { movieId: string } }) => {
  const movie = movies.find((movie) => movie.id === params.movieId);

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      {/* Movie Title and descripttion */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">
          {movie?.title}
        </h2>
        <p className="text-lg text-gray-300">{movie?.description}</p>
      </div>
      {/* Ratings and comments summary */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl text-gray-300">Rating:</p>
            <div className="flex items-center text-yellow-400">
              <FaStar className="mr-1" />
              <span>{movie?.ratings}</span> / 5
            </div>
          </div>

          <div>
            <p className="text-xl text-gray-300">Comments:</p>
            <p className="text-2xl font-semibold text-white">
              {movie?.comments}
            </p>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div>
        <h3 className="text-3xl font-semibold text-white mb-4">Comments</h3>
        <ul className="space-y-4">
          {movie?.commentsList.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-300">{comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
