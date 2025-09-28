


function NavBar({ handleChange, isChecked }) {
  return (
    <header className="fixed z-50 w-full">
      <div className="h-[10vh] flex items-center justify-between ">
        <div
        style={{ fontFamily: "Michroma", fontWeight: "999" }}
        className="pl-5 w-[50vw] h-full flex justify-between items-center">
            <div className="w-[15vw] ">
                <span className="block text-zinc-950">Chd based</span>
                <span className="block text-zinc-500">working globally</span>
            </div>
            <div className="w-[15vw]">
                <span className="block text-zinc-950">Studying at</span>
                <span className="block text-zinc-500">Chandigardh University</span>
            </div>
            <div className="w-[15vw]">
                <span className="block text-zinc-950">Freelancing availability</span>
                <span className="block text-zinc-500">October 2025</span>
            </div>
        </div>


        <div className="w-[30vw] h-full flex justify-end items-center gap-10 p-5">
          <button className="bg-black h-[6vh] w-[13vw] text-white rounded-full">
            <a href="#contactMe" style={{ fontFamily: "Michroma"}}>Get in Touch</a>
          </button>

          <label className="relative inline-block h-[3vh] w-[5vh]">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              className="opacity-0 w-0 h-0 peer"
            />
            <span
              className="
                absolute cursor-pointer top-0 left-0 right-0 bottom-0 
                rounded-[30px] transition duration-500
                bg-[#28096b] peer-checked:bg-[#6eccff]
              "
            ></span>
            <span
              className="
                absolute content-[''] h-[clamp(0.8rem,2vh,1rem)] w-[clamp(0.8rem,2vh,1rem)]
                rounded-full left-[15%] bottom-[25%] transition duration-500
                shadow-[inset_0.5em_-0.2em_0px_0px_#fff000]
                bg-[#28096b]
                peer-checked:translate-x-[clamp(1rem,2vw,1.2rem)]
                peer-checked:shadow-[inset_1em_-0.25em_0px_1em_#fff000]
                peer-checked:bg-[#6eccff]
              "
            ></span>
          </label>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
