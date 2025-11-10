import React from 'react';

export default function Showcase() {
  return (
    <section id="store" className="w-full bg-neutral-950 py-16 text-neutral-200">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold text-white">Digital Products</h3>
        <p className="mt-2 text-neutral-400">Downloadable assets and AI-crafted pieces.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[{
            title: 'AI Ambient Pack',
            desc: '10 looping ambient tracks generated with my custom models.',
            price: '$12',
            img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop'
          },{
            title: 'Spline Scene Presets',
            desc: 'Five red/orange tile motifs for immersive hero sections.',
            price: '$18',
            img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=600&auto=format&fit=crop'
          },{
            title: 'Japanese Brush SVGs',
            desc: 'Handcrafted brush strokes for UI dividers and masks.',
            price: '$9',
            img: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=600&auto=format&fit=crop'
          }].map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-xl border border-red-500/20 bg-neutral-900/60 shadow transition">
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                <p className="mt-1 text-sm text-neutral-300">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-red-300">{p.price}</span>
                  <button className="rounded-md bg-red-600 px-3 py-1.5 text-sm text-white ring-1 ring-red-400/50 transition hover:bg-red-500">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
