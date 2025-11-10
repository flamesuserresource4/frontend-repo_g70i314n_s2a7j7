import React from 'react';

export default function Profile() {
  return (
    <section id="profile" className="relative w-full bg-neutral-950 py-16 text-neutral-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop"
            alt="Profile"
            className="h-28 w-28 rounded-full border-2 border-red-500 object-cover shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Akari Tanaka
            </h2>
            <p className="mt-2 max-w-3xl text-neutral-300">
              Designer and sound crafter blending Japanese wabi-sabi sensibilities with modern tech.
              I build handcrafted visuals, ambient music, and digital experiences with a red-orange
              palette, bold forms, and quiet detail.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Art Direction','3D Spline','Sound Design','Frontend'].map((chip) => (
                <span key={chip} className="rounded-full border border-red-500/40 bg-red-600/10 px-3 py-1 text-xs text-red-200">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
