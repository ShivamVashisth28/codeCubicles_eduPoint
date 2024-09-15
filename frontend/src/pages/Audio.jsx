import React, { useRef, useState } from 'react';
import axios from 'axios';

function AudioPlayer() {
  const [audioUrl, setAudioUrl] = useState(null);
  const [topic, setTopic] = useState('');
  const [audioList, setAudioList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const generateAudio = async () => {
    try {
      setLoading(true);
      
      const response = await axios.post("http://localhost:5000/api/v1/ai/audio", {
        text: topic,
      }, {
        responseType: 'blob',
      });

      const audioBlob = response.data;
      const audioUrl = URL.createObjectURL(audioBlob);

      // Add the new audio to the list
      setAudioList((prevList) => [...prevList, audioUrl]);
      setAudioUrl(audioUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error generating audio:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Topic Explainer in Voice
        </h1>

        <input
          disabled={loading}
          value={topic}
          onChange={handleTopicChange}
          placeholder="Enter topic name"
          className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />

        <button
          onClick={generateAudio}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-4 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="w-5 h-5 mr-2 animate-spin text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12a8 8 0 0116 0A8 8 0 014 12z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate Explanation'
          )}
        </button>

        {audioList.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Generated Explanations:</h2>
            <ul>
              {audioList.map((url, index) => (
                <li key={index} className="mb-4">
                  <audio controls src={url} className="w-full max-w-md mx-auto" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AudioPlayer;
