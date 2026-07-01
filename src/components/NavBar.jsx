import { useEffect, useRef } from "react";
import gsap from "gsap";

function NavBar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <header 
    ref={ navRef }
    className="fixed top-0 left-0 h-[10vh] w-full flex z-[9998] bg-transparent">
      <div className="w-full text-blacks px-8 py-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-10">
          <div className="font-semibold tracking-widest text-2xl">
            Lakshya Sharma
          </div>
          <div className="text-lg opacity-80">
            Work, Create, Thrive
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8 text-lg">
          <div>Chandigarh, IND</div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;