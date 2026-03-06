import React from "react";

export default function ContactDetailsBar() {
  return (
    <div className="bg-primary text-white text-sm transition-transform duration-300">
      {/* Phone Bar */}
      <div className="flex flex-wrap justify-center gap-6 py-2">
        <a href="tel:+919900000000" className="font-medium">
          +91 99 0000 0000
        </a>

        <a href="tel:+919811111111" className="font-medium">
          +91 98 1111 1111
        </a>

        <a
          href="mailto:gopijami8790@gmail.com"
          className="font-medium text-center "
        >
          Gopijami8790@gmail.com
        </a>
      </div>
    </div>
  );
}