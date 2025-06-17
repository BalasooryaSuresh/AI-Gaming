import React, { useState } from 'react';

export default function ParameterPanel({ onNext }) {
  const [prompt, setPrompt] = useState('');
  const [params, setParams] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchParameters = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer sk-free',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a game designer assistant. Return parameters for a game as JSON based on user instructions. Use keys like speed, gravity, spawnRate, difficultyLevel.' },
            { role: 'user', content: prompt }
          ]
        })
      });
      const data = await response.json();
      const result = JSON.parse(data.choices[0].message.content);
      setParams(result);
    } catch (e) {
      alert('Error fetching game parameters.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Step 3: Tune Game Parameters</h2>
      <p className="mb-2">Describe how you want the game to behave (e.g., "make it fast and difficult"):</p>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 rounded w-full mb-3"
        placeholder="e.g. harder, slower player, fast enemies"
      />
      <button
        onClick={fetchParameters}
        disabled={loading || !prompt}
        className="bg-green-600 text-white px-4 py-2 rounded shadow"
      >
        {loading ? 'Fetching...' : 'Suggest Parameters'}
      </button>

      {params && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow">
          <h3 className="text-lg font-medium mb-2">Suggested Parameters</h3>
          <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(params, null, 2)}</pre>
          <button onClick={() => onNext(params)} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">Use These Settings</button>
        </div>
      )}
    </div>
  );
}