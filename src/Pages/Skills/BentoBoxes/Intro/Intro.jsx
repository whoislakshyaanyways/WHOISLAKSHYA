import { Highlighter } from "../../../../components/UI/HighlightText"
import { HyperText } from "../../../../components/UI/HyperText"
function Intro() {
  return (
    <div className="bg-zinc-400 h-full rounded-2xl flex justify-center items-center text-center p-10">
      <Highlighter action="underline" color="#ff9800">
        <HyperText className="text-4xl font-semibold text-zinc-900">
          What I can do™
        </HyperText>
      </Highlighter>
      
    </div>
  )
}

export default Intro
