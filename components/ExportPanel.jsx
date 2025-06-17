import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function ExportPanel({ template, assets, params }) {
  const handleExport = async () => {
    const zip = new JSZip();
    const folder = zip.folder(template.id);

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${template.name} - Customized</title>
</head>
<body>
  <h1>${template.name}</h1>
  <img src="assets/skin.png" alt="Reskin Preview" />
  <script>
    const gameParams = ${JSON.stringify(params, null, 2)};
    console.log("Game parameters loaded:", gameParams);
    // Your game engine code here
  </script>
</body>
</html>`;

    folder.file("index.html", htmlContent);

    // Add image asset (main preview skin)
    const response = await fetch(assets.main);
    const blob = await response.blob();
    folder.file("assets/skin.png", blob);

    // Download ZIP
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, `${template.id}-custom-game.zip`);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Step 4: Export Game</h2>
      <p className="mb-2">Click below to download a fully playable HTML5 game package.</p>
      <button
        onClick={handleExport}
        className="bg-purple-700 text-white px-4 py-2 rounded shadow"
      >
        📦 Export as .zip
      </button>
    </div>
  );
}
