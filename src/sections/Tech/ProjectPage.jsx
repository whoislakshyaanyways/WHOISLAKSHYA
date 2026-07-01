import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProjectInfo from "../../constants/projects.json";
import Mspaint from "../../components/Mspaint";

const { Features } = ProjectInfo;

const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = Features.find(p => p.id === projectId);

  if (!project) {
    return <div className="p-20 text-zinc-500 bg-zinc-50 min-h-screen">Project not found</div>;
  }

  return (
    <div className="fixed inset-0 z-50 bg-zinc-100 overflow-y-auto text-zinc-800 font-sans">
      
      <button
        onClick={() => navigate(`/zero`)}
        className="absolute top-6 right-8 z-50 text-zinc-400 hover:text-zinc-900 text-3xl font-light transition-colors"
      >
        ✕
      </button>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[420px_1fr] gap-12 lg:gap-16 items-start">
        
        <div className="w-full md:sticky top-16 flex flex-col gap-4">
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-zinc-200 shadow-[0_8px_30px_rgba(24,24,27,0.04)]">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-zinc-200 flex items-center justify-center text-zinc-400 text-sm">
                [ No Preview Asset Loaded ]
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 uppercase leading-none mb-5">
              {project.title}
            </h1>

            <div className="flex flex-col gap-3 text-zinc-500">
              <div>
                <span className="text-xs font-bolduppercase tracking-widest text-zinc-400 sm:ml-2">
                  {project.category} &bull; {project.year}
                </span>
              </div>

              <div className="flex gap-3 ">
                <a href={project.github} target="_blank" rel="noreferrer" className="w-18 h-9 rounded-full border border-zinc-300 flex items-center justify-center hover:text-zinc-900 hover:border-zinc-900 text-xs font-medium bg-white shadow-sm no-underline transition-colors">
                  Git
                </a>

                <a href={project.live} target="_blank" rel="noreferrer" className="w-18 h-9 rounded-full border border-zinc-300 flex items-center justify-center hover:text-zinc-900 hover:border-zinc-900 text-xs font-medium bg-white shadow-sm no-underline transition-colors">
                  Link
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-400">
              Project Bio
            </h3>
            <p className="text-base md:text-lg font-medium text-zinc-700 leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>
            <p className="text-sm md:text-base text-zinc-600 leading-[1.65] max-w-3xl mt-1">
              {project.overview}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-400">
              Core Features
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
              {project.keyFeatures.map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-4 bg-white border border-zinc-200 hover:border-zinc-400 p-4 rounded-xl shadow-sm transition-all group"
                >
                  <div className="text-xs font-mono font-bold text-zinc-300 group-hover:text-zinc-600 transition-colors">
                    {i < 9 ? `0${i + 1}` : i + 1}
                  </div>
                  <div className="text-sm font-semibold text-zinc-700 group-hover:text-zinc-900">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {project.goalsAndObjectives && (
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-400">
                Goals & Targets
              </h3>
              <ul className="list-none flex flex-col gap-3 max-w-3xl text-sm text-zinc-600 pl-0">
                {project.goalsAndObjectives.map((goal, idx) => (
                  <li key={idx} className="flex gap-3 items-start bg-white border border-zinc-200/60 p-3 rounded-xl shadow-sm">
                    <span className="text-zinc-400 font-bold">&rarr;</span>
                    <span className="leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t border-zinc-200 pt-8 mt-4 flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-400">
              Developer's Info
            </h3>
            <div className="flex justify-start items-center overflow-x-auto py-2">
              <Mspaint devInfo={project.devInfo} />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono font-bold text-zinc-400 tracking-widest uppercase border-t border-zinc-200/60 pt-4">
            <span>Project Ecosystem // Build {project.id}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectPage;