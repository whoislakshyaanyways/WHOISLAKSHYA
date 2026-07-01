import React from 'react';
import { useNavigate } from "react-router-dom";

import temp from "../assets/image.png"

function Pcard({ project, i }) {
  const navigate = useNavigate();



  return (
    <div
      style={{
        top: `calc(-5vh + ${i * 45}px)`,
      }}
      className={`relative w-full py-[clamp(32px,5vw,56px)] px-[clamp(24px,6vw,64px)] flex flex-col justify-center rounded-[32px] shadow-[0_-12px_40px_rgba(24,24,27,0.03),0_24px_60px_rgba(24,24,27,0.06)]transition-all duration-300 ${project.bg}`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 group">
        
        <div className="flex-1 flex flex-col justify-between min-h-[320px]">
          <div>
            {/* Project Index Subheading */}
            <span className="block text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              Project / {parseInt(project.id) < 10 ? `0${project.id}` : project.id}
            </span>

            {/* Title */}
            <h2 
              onClick={() => navigate(`/zero/projects/${project.id}`)}
              className="cursor-pointer text-[clamp(32px,4.5vw,56px)] font-bold text-zinc-900 dark:text-zinc-50 mb-4 leading-[1.15] tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors"
            >
              {project.title}
            </h2>

            {/* Subtitle / Description */}
            <p className="text-[clamp(14px,1.4vw,16px)] font-normal text-zinc-600 dark:text-zinc-400 leading-[1.6] max-w-[540px] mb-6">
              {project.subtitle}
            </p>

            {/* Interactive Button Action Row */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-5 py-2.5 rounded-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 no-underline transition-colors shadow-sm"
              >
                GitHub Repo
              </a>

              <a
                href={project.live || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 no-underline transition-colors"
              >
                Live Site ↗
              </a>

              <button
                onClick={() => navigate(`/zero/projects/${project.id}`)}
                className="text-xs font-semibold px-5 py-2.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                More Info
              </button>
            </div>
          </div>

        </div>

        <div className="flex flex-col-reverse items-end gap-6 shrink-0">
          <div 
            onClick={() => navigate(`/zero/projects/${project.id}`)}
            className="cursor-pointer w-full sm:w-[320px] lg:w-[420px] aspect-[16/10] lg:h-[280px] rounded-[20px] overflow-hidden relative"
          >
              <img 
                src={temp}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            {/* {project.videoUrl ? (
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            ) : (
              <img 
                src={temp}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            )} */}
          </div>

          <span className="text-[clamp(48px,5vw,72px)] font-bold tracking-tighter text-zinc-300 dark:text-zinc-700 leading-none select-none">
            ({parseInt(project.id) < 10 ? `0${project.id}` : project.id})
          </span>
        </div>

      </div>
    </div>
  );
}

export default Pcard;