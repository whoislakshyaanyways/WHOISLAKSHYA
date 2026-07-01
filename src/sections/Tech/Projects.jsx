import { useNavigate } from "react-router-dom";
import PCard from "../../components/Pcard";
import ShrinkRotate from "../../components/animations/ShrinkRotate";
import projects from "../../constants/projects.json";

const rotations = [2, -2, 3, -3];

function Projects() {
  const navigate = useNavigate();

  const Features = projects?.Features || [];

  return (
    <div className="bg-black px-5">
      <div className="bg-white">
        <h1 className="heading text-8xl font-bold px-5 max-md:text-5xl max-md:pl-5">
          Work in motion.
        </h1>

        {Features.map((project, i) => (
          <div
            key={project.id}
            style={{ top: 0, zIndex: i + 1 }}
            className="sticky h-screen flex items-center justify-center"
          >
            <ShrinkRotate rotateTo={rotations[i % rotations.length]}>
              <PCard project={project} i={i} />
            </ShrinkRotate>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;