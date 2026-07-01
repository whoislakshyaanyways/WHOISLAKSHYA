import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./NavBar";
import Island from "./Island";

gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  const [showUI, setShowUI] = useState(false);

  const navRef = useRef(null);
  const islandRef = useRef(null);

  // Scroll trigger
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#hero",
      start: "bottom 10%",
      onEnter: () => setShowUI(true),
      onLeaveBack: () => setShowUI(false),
    });

    return () => trigger.kill();
  }, []);
  return (
    <>
        {showUI && <Navbar />}

        {showUI && <Island />}
      <Outlet />
    </>
  );
};

export default Layout;