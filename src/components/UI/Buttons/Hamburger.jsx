import React from "react";

const Hamburger = ({ checked, onChange }) => {
  return (
    <label className="relative w-7 h-5 cursor-pointer flex flex-col justify-between">
      {/* Hidden checkbox */}
      <input
        type="checkbox"
        id="burger"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      {/* Line 1 */}
      <span
        className={`absolute left-0 w-full h-1 rounded-lg bg-white transition-all duration-300 origin-left ${
          checked ? "rotate-45 top-0" : "top-0 rotate-0"
        }`}
      />

      {/* Line 2 */}
      <span
        className={`absolute left-0 w-full h-1 rounded-lg bg-white transition-all duration-300 origin-left ${
          checked
            ? "opacity-0 w-0 top-1/2"
            : "top-1/2 -translate-y-1/2 opacity-100 w-full"
        }`}
      />

      {/* Line 3 */}
      <span
        className={`absolute left-0 w-full h-1 rounded-lg bg-white transition-all duration-300 origin-left ${
          checked
            ? "rotate-[-45deg] top-[100%]"
            : "top-full -translate-y-full rotate-0"
        }`}
      />
    </label>
  );
};

export default Hamburger;
