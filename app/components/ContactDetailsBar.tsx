import React from "react";

export default function ContactDetailsBar() {
  return (
    <div className="bg-[#1f2937] text-white w-full text-sm transition-transform duration-300">
      {/* Phone Bar */}
      <div className="flex flex-wrap justify-center gap-1 md:gap-6 py-2 md:py-3">
        <a href="tel:+919900000000"
            className="text-xs font-medium px-4 text-white hover:text-[#C9A227] transition-colors duration-300"
          >
            +91 99 0000 0000
          </a>

        <a href="tel:+919811111111" className="text-xs font-medium px-4 text-white  hover:text-[#C9A227] transition-colors duration-300">
          +91 98 1111 1111
        </a>

        <a
          href="mailto:gopijami8790@gmail.com"
          className="text-xs font-medium text-white hover:text-[#C9A227] transition-colors duration-300 text-center "
        >
          Gopijami8790@gmail.com
        </a>
      </div>
    </div>
  );
}