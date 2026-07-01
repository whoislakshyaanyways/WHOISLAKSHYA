import { useRef } from 'react'
import { motion } from "framer-motion";

const Elements = [
  {
    type: 'pill',
    label: 'C++',
    bg: 'bg-[#00599C]',
    color: 'text-white',
    className: 'text-5xl font-black px-12 py-7 whitespace-nowrap',
  },
  {
    type: 'pill',
    label: 'Nodejs',
    bg: 'bg-[#339933]',
    color: 'text-white',
    className: 'text-5xl font-black px-12 py-7 whitespace-nowrap',
  },
  {
    type: 'pill-tall',
    label: 'Expressjs',
    bg: 'bg-[#000000]',
    color: 'text-white border border-zinc-700',
  },
  {
    type: 'circle-icon',
    label: 'Python',
    bg: 'bg-[#3776AB]',
    color: 'text-white',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 6v12M6 12h12"/>
      </svg>
    ),
  },
  {
    type: 'circle-icon',
    label: 'JavaScript',
    bg: 'bg-[#F7DF1E]',
    color: 'text-[#111]',
    icon: (
      <span className="text-4xl font-black tracking-tighter">JS</span>
    ),
  },
  {
    type: 'circle-icon',
    label: 'GitHub',
    bg: 'bg-[#181717]',
    color: 'text-white',
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
  {
    type: 'pill',
    label: 'React',
    bg: 'bg-[#61DAFB]',
    color: 'text-[#111]',
    className: 'text-5xl font-black px-12 py-7 whitespace-nowrap',
  },
  {
    type: 'pill',
    label: 'Tailwind',
    bg: 'bg-[#E0417F]',
    color: 'text-[#f9b8d0]',
    className: 'text-5xl font-black px-16 py-7 whitespace-nowrap',
  },
]

function FloatElement({ element, containerRef }) {
  switch (element.type) {
    case 'pill':
      return (
        <motion.div
            className={`flex items-center justify-center rounded-full font-black cursor-grab shadow-lg ${element.bg} ${element.color} ${element.className}`}
            whileHover={{scale:1.1}}
            drag
            dragConstraints={containerRef}
        >
          {element.label}
        </motion.div>
      )

    case 'pill-tall':
      return (
        <motion.div
            className={`flex items-center justify-center rounded-full font-black text-5xl cursor-grab shadow-lg ${element.bg} ${element.color}`}
            style={{
                width: 120,
                height: 400,
                transform: 'rotate(-30deg)',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                flexShrink: 0,
            }}
            whileHover={{scale:1.1}}
            drag
            dragConstraints={containerRef}
        >
          {element.label}
        </motion.div>
      )

    case 'circle-icon':
      return (
        <motion.div
            className={`rounded-full flex flex-col gap-1 items-center justify-center shadow-lg cursor-grab flex-shrink-0 font-bold ${element.bg} ${element.color}`}
            style={{ width: 180, height: 180 }}
            whileHover={{scale:1.1}}
            drag
            dragConstraints={containerRef}
        >
          {element.icon}
          <span className="text-sm font-black tracking-tight">{element.label}</span>
        </motion.div>
      )

    default:
      return null
  }
}

function TechStack() {
  const containerRef = useRef(null);

  return (
    <div className="w-full bg-black px-5 flex flex-col justify-end font-sans">
        <div className='px-5 bg-white'>
            <div
                style={{ height: '75vh' }}
                className="w-full rounded-xl p-5 bg-black flex flex-col overflow-hidden relative shadow-md select-none"
            >
                <div className="absolute top-16 left-0 right-0 text-center pointer-events-none z-10">
                    <h2 className="text-7xl font-extrabold tracking-tighter text-[#251014]">
                        <span className="text-[#b61f5d]">Tech </span>Stack!
                    </h2>
                </div>

                <div
                ref={containerRef}
                className="w-full h-full flex items-end justify-center gap-4 px-8 pb-20 pt-32 flex-wrap bg-white"
                >
                {Elements.map((element, i) => (
                    <FloatElement key={i} element={element} containerRef={containerRef} />
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechStack


