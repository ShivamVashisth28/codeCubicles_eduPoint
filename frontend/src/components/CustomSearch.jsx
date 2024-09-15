import React, { useState } from 'react';

function PdfSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchPdfs = async () => {
    const apiKey = 'AIzaSyBPigOp0-9Mhry1E0CRIEHr5Lr8P_gI8p4'; // Replace with your Google API Key
    const searchEngineId = '5710201adac2b40c0'; // Replace with your Custom Search Engine ID
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}+filetype:pdf&key=${apiKey}&cx=${searchEngineId}`;

    const response = await fetch(url);
    const data = await response.json();
    setResults(data.items || []);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Search Input */}
      <div className="w-full max-w-lg mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search PDFs..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={searchPdfs}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </div>

      {/* Results Section */}
      <div className="w-full max-w-3xl">
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li key={index} className="bg-white p-4 rounded-md shadow-md">
                <a
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {result.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default PdfSearch;
