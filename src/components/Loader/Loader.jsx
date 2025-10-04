import React from "react";
import "./Loader.css"; 

const Loader = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#d9c1a6]">
        <div className="capybaraloader scale-200 relative w-[14em] h-[10em] z-[1]">
            <div className="capybara relative w-full h-[7.5em] z-[1]">
                <div className="capyhead absolute right-0 bottom-0 w-[7.5em] h-[7em] rounded-[3.5em] bg-[rgb(204,125,45)] shadow-[-1em_0_rgb(83,56,28)] animate-movebody z-[3]">
                <div className="capyear absolute top-0 left-0 w-[2em] h-[2em] rounded-full overflow-hidden bg-[rgb(204,125,45)]" />
                <div className="capyear absolute top-0 left-[5em] w-[2em] h-[2em] rounded-full overflow-hidden bg-[rgb(204,125,45)]" />
                <div className="capymouth absolute bottom-0 left-[2.5em] w-[3.5em] h-[2em] rounded-full bg-[rgb(83,56,28)] flex justify-around items-center p-2">
                    <div className="capylips w-1 h-3 rounded-full rotate-[-45deg] bg-[rgb(204,125,45)]" />
                    <div className="capylips w-1 h-3 rounded-full rotate-[45deg] bg-[rgb(204,125,45)]" />
                </div>
                <div className="capyeye absolute bottom-[3.5em] left-[1.5em] w-[2em] h-[0.5em] rounded-[5em] rotate-[45deg] bg-[rgb(83,56,28)]" />
                <div className="capyeye absolute bottom-[3.5em] left-[5.5em] w-[1.75em] h-[0.5em] rounded-[5em] rotate-[-45deg] bg-[rgb(83,56,28)]" />
                </div>

                <div className="capyleg absolute bottom-0 left-0 w-[6em] h-[5em] rounded-[2em] bg-[rgb(204,125,45)] animate-movebody z-[2]" />
                <div className="capyleg2 absolute bottom-0 left-[3.25em] w-[1.75em] h-[3em] rounded-[0.75em] bg-[rgb(204,125,45)] shadow-[inset_0_-0.5em_rgb(83,56,28)] animate-moveleg z-[2]" />
                <div className="capyleg2 absolute bottom-0 left-[0.5em] w-[1.25em] h-[2em] rounded-[0.75em] bg-[rgb(204,125,45)] shadow-[inset_0_-0.5em_rgb(83,56,28)] animate-moveleg2 z-[2]" />

                <div className="capy relative w-[85%] h-full rounded-[45%] bg-[rgb(204,125,45)] animate-movebody z-[1]" />
            </div>

            <div className="loader relative w-full h-[2.5em] overflow-hidden z-[1]">
                <div className="loaderline w-[50em] h-[0.5em] border-t-[0.5em] border-dashed border-[rgb(83,56,28)] animate-moveline" />
            </div>
        </div>

        <div className="w-full h-[25vh] flex items-start justify-center leading-none text-[10vh] overflow-hidden pt-10"
            style={{fontFamily:"Bebas Neue", fontWeight:"500"}}>
                The Portfolio is under construction
        </div>
    </div>
  );
};

export default Loader;
