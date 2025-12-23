function NavBar({ handleChange, isChecked }) {
  return (
    <header className="fixed z-50 w-full bg-transparent">
      <div className="h-[10vh] flex items-center justify-between px-5
      max-md:justify-end">

        <div
          style={{ fontFamily: "Michroma", fontWeight: "999" }}
          className="hidden md:flex gap-10 items-center"
        >
          <div>
            <span className="block text-zinc-950 text-[clamp(0.7rem,1vw,1rem)]">Chd based</span>
            <span className="block text-zinc-500 text-[clamp(0.6rem,0.9vw,0.9rem)]">working globally</span>
          </div>

          <div>
            <span className="block text-zinc-950 text-[clamp(0.7rem,1vw,1rem)]">Studying at</span>
            <span className="block text-zinc-500 text-[clamp(0.6rem,0.9vw,0.9rem)]">Chandigardh University</span>
          </div>

          <div>
            <span className="block text-zinc-950 text-[clamp(0.7rem,1vw,1rem)]">Freelancing availability</span>
            <span className="block text-zinc-500 text-[clamp(0.6rem,0.9vw,0.9rem)]">January 2025</span>
          </div>
        </div>

        <div className="flex items-center gap-5">

          <button
            className="
              bg-black text-white rounded-full
              px-5 py-2
              text-[clamp(0.7rem,1vw,1rem)]
              hover:opacity-90 transition
            "
          >
            <a href="#contactMe" style={{ fontFamily: "Michroma" }}>
              Get in Touch
            </a>
          </button>

          {/* TOGGLE SWITCH */}
          <label className="relative inline-block h-[clamp(1.5rem,3vh,2rem)] w-[clamp(3rem,5vw,3.5rem)]">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              className="opacity-0 w-0 h-0 peer"
            />

            {/* Track */}
            <span
              className="
                absolute inset-0 cursor-pointer rounded-full
                transition duration-500
                bg-[#28096b] peer-checked:bg-[#6eccff]
              "
            ></span>

            {/* Knob */}
            <span
              className="
                absolute h-[clamp(0.8rem,2vh,1.1rem)] w-[clamp(0.8rem,2vh,1.1rem)]
                rounded-full left-[10%] top-[50%] -translate-y-1/2
                bg-[#28096b] shadow-[inset_0.5em_-0.2em_0_0_#fff000]
                transition duration-500
                peer-checked:translate-x-[clamp(1rem,2vw,1.3rem)]
                peer-checked:bg-[#6eccff]
                peer-checked:shadow-[inset_1em_-0.25em_0_1em_#fff000]
              "
            ></span>
          </label>

        </div>
      </div>
    </header>
  );
}

export default NavBar;
