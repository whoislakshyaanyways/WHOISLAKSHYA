import { Globe, Brush, Code, Atom, Workflow, Container, Database } from "lucide-react";
import Card from "../../../../components/UI/FullStackCard";

const colors = [
  { color: "#264653", label: "Tailwind CSS" },
  { color: "#2A9D8F", label: "React" },
  { color: "#E9C46A", label: "Django" },
  { color: "#F4A261", label: "Fast API" },
  { color: "#E76F51", label: "SQL & MongoDB" },
];

const FullStack = () => {
  return (
    <div className="h-full w-full rounded-lg bg-zinc-300 p-5 flex flex-col">
      
      <p className="text-center mb-6 font-semibold text-zinc-900">
        <span className="text-3xl md:text-5xl font-black tracking-tight block">
          FULL STACK
        </span>
        <span className="text-5xl md:text-7xl font-black text-accent tracking-tight block">
          WEB DEV
        </span>
      </p>


      <div className="flex flex-col w-full h-full
      max-md:hidden">
        {colors.map((item) => (
          <Card
            key={item.label}
            color={item.color}
            label={item.label}
          />
        ))}
      </div>

    </div>
  );
};

export default FullStack;
