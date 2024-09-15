import React, { useState } from 'react';
import YoutubeSearch from '../components/Youtube.jsx';
import PdfSearch from '../components/CustomSearch.jsx';
import Quiz from '../components/Quiz.jsx';
import Summarizer from '../components/Summarizer.jsx'; // Import Summarizer component

function Learn() {
  const [option, setOption] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Tab Navigation */}
      <div className="flex gap-10 mb-8">
        <div
          className={`text-lg px-4 py-2 rounded-md cursor-pointer transition duration-300 ${
            option === 'Youtube'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
          }`}
          onClick={() => setOption('Youtube')}
        >
          YouTube Video Search
        </div>
        <div
          className={`text-lg px-4 py-2 rounded-md cursor-pointer transition duration-300 ${
            option === 'Pdf'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
          }`}
          onClick={() => setOption('Pdf')}
        >
          PDF Search
        </div>
        <div
          className={`text-lg px-4 py-2 rounded-md cursor-pointer transition duration-300 ${
            option === 'Quiz'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
          }`}
          onClick={() => setOption('Quiz')}
        >
          Quiz Generator
        </div>
        <div
          className={`text-lg px-4 py-2 rounded-md cursor-pointer transition duration-300 ${
            option === 'Summarizer'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
          }`}
          onClick={() => setOption('Summarizer')}
        >
          Explainer
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {option === 'Youtube' ? (
          <YoutubeSearch />
        ) : option === 'Pdf' ? (
          <PdfSearch />
        ) : option === 'Quiz' ? (
          <Quiz />
        ) : option === 'Summarizer' ? (
          <Summarizer /> // Render the Summarizer component
        ) : (
          <p className="text-center text-gray-600">Select an option to view content.</p>
        )}
      </div>
    </div>
  );
}

export default Learn;
