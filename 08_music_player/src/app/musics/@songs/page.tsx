import { Clock, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SongsList = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("content is currently loading...");
    }, 3000)
  );
  const songs = [
    { id: 1, artist: "The Weeknd", title: "Blinding Lights", time: "3:20" },
    { id: 2, artist: "Taylor Swift", title: "Cruel Summer", time: "2:58" },
    { id: 3, artist: "Ed Sheeran", title: "Perfect", time: "4:23" },
    { id: 4, artist: "Drake", title: "Hotline Bling", time: "3:55" },
    { id: 5, artist: "Adele", title: "Hello", time: "4:55" },
  ];

  return (
    <div className="w-[96%] mx-auto px-4">
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">
        Song Collection
      </h2>
      <ul className="space-y-4">
        {songs.map((song) => (
          <Link href={`/musics/${song.id}`} key={song.id}>
            <li
              className="flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md 
            cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              <div className="flex items-center gap-5">
                <Image
                  src="https://images.unsplash.com/photo-1749920937484-a61e6a9566a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                  width={350}
                  height={250}
                  className="flex:shrink-0"
                ></Image>
                <div>
                  <p className="text-white font-medium">{song.artist}</p>
                  <p className="text-sm text-gray-400">{song.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{song.time}</span>
                </div>
                <Heart
                  size={16}
                  className="cursor-pointer hover:text-red-500"
                />

                <button className="text-lg font-bold ">⋮</button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;
