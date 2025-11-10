import React from 'react';

export default function Media() {
  return (
    <section id="media" className="w-full bg-neutral-950 py-16 text-neutral-200">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 shadow">
          <h3 className="mb-3 text-lg font-medium text-white">Video Reel</h3>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 shadow">
          <h3 className="mb-3 text-lg font-medium text-white">Photo Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3,4,5,6].map((i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/photo-152${80 + i}5899-7aa3e2e4a37a?q=80&w=400&auto=format&fit=crop`}
                alt={`Gallery ${i}`}
                className="aspect-square w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 shadow md:col-span-2">
          <h3 className="mb-3 text-lg font-medium text-white">Spotify Embed</h3>
          <div className="w-full overflow-hidden rounded-lg">
            <iframe
              className="h-80 w-full"
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
