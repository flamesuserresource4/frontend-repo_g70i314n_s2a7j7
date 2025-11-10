import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl text-neutral-200">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-600/20 px-3 py-1 text-xs font-medium text-red-300 ring-1 ring-red-500/30">
            <span className="h-2 w-2 rounded-full bg-red-400"></span>
            日本の手作り美学 • Handcrafted
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Portfolio — Red Crafted Aesthetic
          </h1>
          <p className="mt-4 text-base text-neutral-300 md:text-lg">
            Modern Japanese-inspired portfolio blending handcrafted warmth with digital artistry.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#profile"
              className="rounded-md bg-red-600 px-4 py-2 text-white shadow ring-1 ring-red-400/50 transition hover:bg-red-500"
            >
              Explore Profile
            </a>
            <a
              href="#store"
              className="rounded-md bg-neutral-800 px-4 py-2 text-neutral-200 ring-1 ring-neutral-700 transition hover:bg-neutral-700"
            >
              View Digital Goods
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
