"use client";
import { useState } from "react";

interface YouTubeFacadeProps {
  videoId: string;
}

const YouTubeFacade = ({ videoId }: YouTubeFacadeProps) => {
  const [playing, setPlaying] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&controls=0&disablekb=1`;
  const thumbUrl  = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-[4px] border border-black bg-black ${!playing ? "cursor-pointer" : ""}`}
      style={{ boxShadow: "0 0 0 1px rgba(198,220,128,0.08), 0 24px 60px rgba(0,0,0,0.6)" }}
      onClick={() => !playing && setPlaying(true)}
    >
      {!playing && (
        <>
          <img
            src={thumbUrl}
            alt="Video thumbnail"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.7] transition-all duration-300 group-hover:brightness-50 group-hover:scale-[1.03]"
          />

          {/* Glint + vignette */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 0, 0, 0.06) 0%, transparent 50%), linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
            }}
          />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="group/btn flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-[#c8ff00]/80 bg-black/50 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-[#c8ff00] hover:bg-[#c8ff00]/15">
              <div
                className="ml-1"
                style={{
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "10px 0 10px 20px",
                  borderColor: "transparent transparent transparent #c8ff00",
                }}
              />
            </div>
          </div>
        </>
      )}

      {playing && (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default YouTubeFacade;