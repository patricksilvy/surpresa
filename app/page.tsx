"use client"

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);

  const handleNameSubmit = (e: any) => {
    e.preventDefault();
    if (name.trim()) {
      setShowPrompt(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 text-black">
      {showPrompt ? (
        <form onSubmit={handleNameSubmit} className="bg-white p-6 rounded shadow-md">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Digite seu primeiro nome:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      ) : (
        <h1 className="text-2xl font-bold">
          Boas vindas, {name}!
        </h1>
      )}
    </div>
  );
}
