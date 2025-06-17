import React from 'react';

const templates = [
  { id: 'flappy', name: 'Flappy Bird', image: '/preview/flappy.png' },
  { id: 'runner', name: 'Speed Runner', image: '/preview/runner.png' },
  { id: 'whack', name: 'Whack-a-Mole', image: '/preview/whack.png' },
  { id: 'match3', name: 'Match-3', image: '/preview/match3.png' },
  { id: 'crossy', name: 'Crossy Road', image: '/preview/crossy.png' },
];

export default function TemplateSelector({ onNext }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Step 1: Choose a Game Template</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {templates.map(template => (
          <div key={template.id} className="border rounded-xl p-2 shadow hover:shadow-lg transition cursor-pointer" onClick={() => onNext(template)}>
            <img src={template.image} alt={template.name} className="w-full h-32 object-cover rounded-md" />
            <p className="text-center mt-2 font-medium">{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
