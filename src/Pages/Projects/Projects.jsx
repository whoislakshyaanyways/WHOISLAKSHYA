import Pjs from '../../components/Pjs';
import './Projects.css'
function Projects() {
  return (
      
    <div className="h-screen bg-zinc-200 flex items-center justify-center pt-[10vh]">
      <div className="pb-30 max-w-[1440px] mx-auto w-full">
        <h1 className="heading text-8xl font-bold mb-10 pl-20 max-md:text-6xl">Work in motion.</h1>
        <div className="animate-slide-in ">
          <Pjs />
        </div>
      </div>
    </div>

  );
}

export default Projects;
