
import React from "react";

const navLinks = [
  { label: "Find freelancers", href: "#" },
  { label: "Find Jobs", href: "#" },
  { label: "About", href: "#" },
  { label: "Solutions", href: "#" },
];

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <ul className="flex flex-col gap-2 md:flex-row md:gap-8 font-bricolage">
    {navLinks.map(link => (
      <li key={link.label}>
        <a
          href={link.href}
          onClick={onClick}
          className="text-black font-normal hover:underline text-lg md:text-base px-2 py-1 transition-all duration-200"
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

export default NavLinks;
