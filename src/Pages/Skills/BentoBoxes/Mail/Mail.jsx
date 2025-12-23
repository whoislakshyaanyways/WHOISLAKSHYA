
import CopyButton from './copyButton/CopyButton.jsx';

function Mail() {
  return (
    <div
      className="bg-zinc-500 h-full w-full rounded-[1rem] flex flex-col items-center justify-center
        origin-bottom-right transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[8deg]">
      <p className="text-center text-[clamp(1rem,2vw,1.5rem)] font-bold">
        Do you want to start a project together?
      </p>
      <CopyButton />
    </div>

  );
}

export default Mail;
