import React, { useState } from "react";

function CopyButton() {
  const [copied, setCopied] = useState(false);
  const email = "whoislakshyaanyways@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Pseudo-element styles (the animated black slide) */}
      <style>
        {`
          .copy-btn::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 0%;
            top: 0;
            left: -40px;
            transform: skewX(45deg);
            background-color: black;
            z-index: -1;
            transition: width 0.5s ease;
          }
          .copy-btn:hover::before {
            width: 160%;
          }
        `}
      </style>

      <button
        onClick={copyToClipboard}
        className="
          copy-btn
          relative z-0
          px-6 py-3
          w-48
          rounded-full
          text-sm
          text-black
          uppercase
          border-2 border-black
          bg-transparent
          cursor-pointer
          overflow-hidden
          transition-colors duration-300
          hover:text-white
          focus:outline-black focus:outline-4
        "
      >
        <p className="flex items-center justify-center gap-2 m-0">
          {copied ? "Copied!" : "Copy Email Address"}
        </p>
      </button>
    </>
  );
}

export default CopyButton;
