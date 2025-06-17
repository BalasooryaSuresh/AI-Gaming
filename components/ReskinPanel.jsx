import React, { useState } from 'react';

export default function ReskinPanel({ template, onNext }) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const generateAssets = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://replicate-api-proxy.glitch.me/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `game art style, ${prompt}, HD, sprite sheet`,
        })
      });
      const data = await response.json();
      setPreview(data.image);
      onNext({ main: data.image });
    } catch (err) {
      alert('Error generating image');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Step 2: Reskin with AI</h2>
      <p className="mb-2">Enter a visual prompt to reskin your game (e.g., "cyberpunk jungle"):</p>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 rounded w-full mb-3"
        placeholder="Enter prompt..."
      />
      <button
        onClick={generateAssets}
        disabled={loading || !prompt}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        {loading ? 'Generating...' : 'Generate Art'}
      </button>

      {preview && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-1">Preview:</h3>
          <img src={preview} alt="AI Generated" className="rounded shadow max-h-64" />
        </div>
      )}
    </div>
  );
}
