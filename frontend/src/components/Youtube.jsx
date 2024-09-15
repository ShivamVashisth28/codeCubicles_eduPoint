import React, { useState } from "react";
import axios from "axios";

const YoutubeSearch = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const API_KEY = "AIzaSyBPigOp0-9Mhry1E0CRIEHr5Lr8P_gI8p4";

  const handleSearch = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_KEY}`
    );
    setVideos(response.data.items);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Search Input */}
      <div className="w-full max-w-xl mb-6">
        <input
          type="text"
          placeholder="Search YouTube videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </div>

      {/* Video Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {videos.map((video) => (
          <div key={video.id.videoId} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">{video.snippet.title}</h3>
            <iframe
              className="w-full rounded-lg"
              height="215"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeSearch;
