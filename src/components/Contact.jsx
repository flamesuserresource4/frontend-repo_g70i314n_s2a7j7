import React, { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const handleAsk = async () => {
    if (!message.trim()) return;
    // Simple local AI-like echo for now; can be wired to backend later
    const templates = [
      'ありがとうございます — your note feels warm and thoughtful.',
      'Craft first, tech second. I will get back to you shortly.',
      'Arigatou! I appreciate your message and will reply within 24 hours.',
    ];
    const pick = templates[Math.floor(Math.random() * templates.length)];
    setReply(pick + '\n\nYou said: ' + message);
  };

  return (
    <section id="contact" className="w-full bg-neutral-950 py-16 text-neutral-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">Connect</h3>
            <p className="mt-2 max-w-md text-neutral-400">
              Links, website, and socials. Say hello or ask anything.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <a href="https://spotify.com" target="_blank" className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 hover:border-red-500/40 hover:bg-neutral-900">Spotify</a>
              <a href="https://x.com" target="_blank" className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 hover:border-red-500/40 hover:bg-neutral-900">X / Twitter</a>
              <a href="https://instagram.com" target="_blank" className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 hover:border-red-500/40 hover:bg-neutral-900">Instagram</a>
              <a href="https://github.com" target="_blank" className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 hover:border-red-500/40 hover:bg-neutral-900">GitHub</a>
              <a href="https://your-website.example" target="_blank" className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 hover:border-red-500/40 hover:bg-neutral-900">Website</a>
              <a href="#store" className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 hover:border-red-500/40 hover:bg-neutral-900">Products</a>
            </div>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
            <h4 className="text-lg font-medium text-white">Chatbot • AI</h4>
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                placeholder="Ask anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 rounded-md border border-neutral-700 bg-neutral-800/80 px-3 py-2 text-sm outline-none placeholder:text-neutral-400 focus:border-red-500"
              />
              <button onClick={handleAsk} className="rounded-md bg-red-600 px-3 py-2 text-sm text-white ring-1 ring-red-400/50 hover:bg-red-500">
                Ask
              </button>
            </div>
            {reply && (
              <pre className="mt-4 whitespace-pre-wrap rounded-md border border-neutral-800 bg-neutral-950/60 p-3 text-neutral-300">
                {reply}
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
