import React from "react";
import "./OrbitingCircles.css"; 
import Icons from "../icons/Icons"

import Github from '../../../../assets/Icons/github.png';
import HackerRank from '../../../../assets/Icons/HackerRank.png';
import Instagram from '../../../../assets/Icons/Instagram.webp';
import LeetCode from '../../../../assets/Icons/LeetCode.png';
import Linkedin from '../../../../assets/Icons/linkedin.webp';
import Spotify from '../../../../assets/Icons/Spotify.png';
import Vsco from '../../../../assets/Icons/vsco.png';
import X from '../../../../assets/Icons/X.webp';
import Youtube from '../../../../assets/Icons/Youtube.png';



export default function OrbitingCircles() {
  return (
    <div className="orbit-container">

      {/* Orbit 1 with curved text */}
      <div className="orbit orbit1">
        <svg className="orbit-text-svg-1" viewBox="0 0 400 400">
          {/* Circle path for main title */}
          <path
            id="orbitPath1"
            d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
            fill="none"
          />

          {/* Circle path for subtitle (slightly smaller radius so it sits inside) */}
          <path
            id="orbitPath2"
            d="M 200,200 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
            fill="none"
          />

          {/* Main Curved Text */}
          <text className="orbit-text orbit-text-main">
            <textPath href="#orbitPath1" startOffset="25%" textAnchor="middle">
              My Socials
            </textPath>
          </text>

          {/* Sub Curved Text */}
          <text className="orbit-text orbit-text-sub">
            <textPath href="#orbitPath2" startOffset="25%" textAnchor="middle">
              Click on icon to connect
            </textPath>
          </text>
        </svg>
      </div>

      
      <div className="orbit orbit2" style={{ "--quantity": 9 }}>
        <div className="icon icon1" style={{ "--position": 1 }}>
          <div className="icon-content">
            <Icons 
              Style={{ width: "40px", height: "40px" }} 
              Image={Github} 
              Link="https://github.com/whoislakshyaanyways" 
            />
          </div>
        </div>
        <div className="icon icon2" style={{ "--position": 2 }}>
          <div className="icon-content">
            <Icons 
              Style={{ width: "40px", height: "40px" }} 
              Image={HackerRank} 
              Link="https://www.hackerrank.com/profile/whoislakshyaany1"
              />
          </div>
        </div>
        <div className="icon icon3" style={{ "--position": 3 }}>
          <div className="icon-content">
            <Icons 
              Style={{ width: "40px", height: "40px" }} 
              Image={Instagram} 
              Link="https://www.instagram.com/whoislakshyaanyways?igsh=MTB4bTdlZnpkYWpjeg=="
              />
          </div>
        </div>
        <div className="icon icon4" style={{ "--position": 4 }}>
          <div className="icon-content">
            <Icons 
              Style={{ width: "40px", height: "40px" }}
              Image={LeetCode}
              Link="https://leetcode.com/u/whoislakshyaaanyways/"
              />
          </div>
        </div>
        <div className="icon icon5" style={{ "--position": 5 }}>
          <div className="icon-content">
            <Icons 
              Style={{ width: "40px", height: "40px" }} 
              Image={Linkedin} 
              Link="https://www.linkedin.com/in/whoislakshyaanyways/"
              />
          </div>
        </div>
        <div className="icon icon6" style={{ "--position": 6 }}>
          <div className="icon-content">
            <Icons 
              Style={{ width: "40px", height: "40px" }} 
              Image={Spotify} 
              Link="https://open.spotify.com/user/31hebqzg2xpmnnhhlsjspnchtaqm?si=f6386970fcf14e58"
              />
          </div>
        </div>
        <div className="icon icon7" style={{ "--position": 7 }}>
          <div className="icon-content">
            <Icons 
              Style={{ width: "40px", height: "40px" }} 
              Image={Vsco} 
              Link="https://vsco.co/whoislakshyaanyways/gallery"
              />
          </div>
        </div>
        <div className="icon icon8" style={{ "--position": 8 }}>
          <div className="icon-content">
            <Icons 
              Style={{ width: "40px", height: "40px" }} 
              Image={X} 
              Link="https://x.com/WHOISLAKSHYAA"
              />
          </div>
        </div>
        <div className="icon icon9" style={{ "--position": 9 }}>
          <div className="icon-content">
            <Icons 
            Style={{ width: "40px", height: "40px" }} 
            Image={Youtube} 
            Link="https://www.youtube.com/@WhoisLakshyaanyways"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


