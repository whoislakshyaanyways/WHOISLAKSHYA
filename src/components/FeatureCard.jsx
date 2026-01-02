import { useState } from "react";
import Button from "./UI/Buttons/Button";
import Mspaint from "./UI/Vintage/Mspaint/Mspaint"

import ProjectInfo from "../Data/features.json"

  const devInfo1 = {
    name: "Laksh",
    git: "https://github.com/whoislakshyaanyways",
    insta: "https://www.instagram.com/whoislakshyaanyways?igsh=MTB4bTdlZnpkYWpjeg==",
    x: "https://x.com/WHOISLAKSHYAA",
    linkedin: "https://www.linkedin.com/in/whoislakshyaanyways/"
  };
const FeatureCard = () => {

  const [Project, setProject] = useState(null);

  return (
    <>
      {ProjectInfo.map((project, index) => (
        <>
          <div
          onClick={() => setProject(project)}
            className="perspective-[1000px] relative flex flex-shrink-0 w-[420px] h-[600px] rounded-[2rem] overflow-hidden 
            group relative pt-[50px] border-[3px] border-white 
            transform-style-preserve-3d 
            bg-[linear-gradient(135deg,#0000_18.75%,#f3f3f3_0_31.25%,#0000_0),repeating-linear-gradient(45deg,#f3f3f3_-6.25%_6.25%,#ffffff_0_18.75%)] 
            bg-[length:60px_60px] bg-[#f0f0f0] shadow-[rgba(142,142,142,0.3)_0px_30px_30px_-10px] 
            transition-all duration-500 ease-in-out hover:bg-[-100px_100px,-100px_100px] hover:[transform:rotate3d(0.5,1,0,30deg)]"
          >

            <div
              className={`w-full h-full
                          p-[60px_25px_25px_25px]
                          transform-style-preserve-3d
                          transition-all duration-500 ease-in-out
                          ${project.backgroundClass}`}
            >
              <span
                className="inline-block text-zinc-900 text-[25px] 
                          transition-all duration-500
                          transform-style-preserve-3d
                          transition-all duration-500 ease-in-out
                          "
              >
                {project.title}
              </span>

              <p
                className="mt-2.5 text-[16px] font-bold text-zinc-900
                          transition-all duration-500
                          translate-z-[30px]"
              >
                {project.subtitle}
              </p>

              <span
                className="inline-block mt-4 cursor-pointer
                          text-[9px] font-black uppercase
                          text-zinc-900
                          bg-white px-[0.7rem] py-[0.5rem]
                          transition-all duration-500
                          translate-z-[50px]"
              >
                See More
              </span>

              <div
                class="absolute top-[30px] right-[30px] p-[10px]
                      bg-white border border-zinc-900
                      translate-z-[80px]
                      shadow-[rgba(100,100,111,0.2)_0px_17px_10px_-10px]"
              >
                <span class="block text-center text-[20px] font-black text-zinc-500">
                  {project.category}
                </span>
              </div>

            </div>
          </div>

          {Project && (
        <div
          className="fixed maxh inset-0 backdrop-blur-sm flex items-end justify-center z-50"
          onClick={() => setProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-3/5 max-h-[90vh] overflow-y-auto p-6 relative rounded-t-4xl shadow-xl flex flex-col gap-7
            max-md:w-full"
          >
            <div className="flex justify-end">
              <button
              onClick={() => setProject(false)}
              className="fixed w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                ×
              </button>
            </div>

            <div className="flex justify-between
            max-md:flex-col">
              <h1 className="text-5xl font-bold">{Project.title}</h1>
                <p className="text-base">{Project.category}</p>
            </div>

            <div className="bg-zinc-300 rounded-2xl p-12  flex flex-col gap-3">
              <h1 className="text-3xl font-bold">Description</h1>
              <p>{Project.description}</p>
            </div>

            <div className="bg-zinc-300 rounded-2xl p-12 flex flex-col gap-3
            max-md:p-5">
              <h1 className="text-3xl font-bold">Tech Stack Used</h1>
              <table className="w-full border-collapse">
                  <thead className="bg-gray-200">
                  <tr>
                      <th className="px-4 py-2 text-left text-gray-600 font-medium">Usage</th>
                      <th className="px-4 py-2 text-left text-gray-600 font-medium">Tech Stack</th>
                      <th className="px-4 py-2 text-left text-gray-600 font-medium">Description</th>
                  </tr>
                  </thead>
                  {Project?.techStack &&
                  Object.entries(Project.techStack).map(([key, value], i) => (
                    <tbody>
                        <tr key={i} className="border-b border-gray-300">
                          <td className="px-4 py-2 w-1/6">{key}</td>
                          <td className="px-4 py-2 w-2/6">
                              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">{value.techStack}
                              </span>
                          </td>
                          <td className="px-4 py-2 w-3/6">{value.description}</td>
                        </tr>
                    </tbody>
                  ))}
              </table>
            </div>

            <div className="bg-zinc-300 rounded-2xl p-12">
              <div
                class="w-auto h-[500px] rounded-xl overflow-hidden
                      shadow-[0_10px_20px_#dbdbdb]
                      font-sans"
              >
                <div class="flex justify-center p-5 h-[86%] bg-zinc-100">
                  <div className="flex items-center overflow-x-auto rounded-md  gap-1 p-1">
                    {Project.keyFeatures.map((feature, i) =>(
                      <div
                        key={i}
                        className="flex-1 h-full flex items-center justify-center
                                  overflow-hidden cursor-pointer rounded-sm
                                  border border-zinc-900 bg-zinc-200
                                  transition-all duration-500
                                  hover:flex-[4] group"
                      >
                        <span className="px-2 text-center
                                        transform -rotate-90
                                        transition-all duration-500
                                        uppercase text-zinc-900 tracking-[0.1em]
                                        group-hover:rotate-0">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
                <div
                  class="h-[14%] w-full bg-white
                        flex items-center justify-between
                        px-6 text-[#bebebe]"
                >
                  <span>Key Features</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-300 rounded-2xl p-12 flex flex-col gap-3 
            max-md:hidden">
              <h1 className="text-3xl font-bold">Devs</h1>
              <div className="flex justify-around items-center">
                <Mspaint devInfo={devInfo1}/>
              </div>
            </div>
          </div>
        </div>
          )}

        </>
      ))} 
    </>

  );
};

export default FeatureCard;