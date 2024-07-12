import React from "react";
import AtomLink from "../atoms/link/AtomLink";

function MenuItem({ to, icon, text, className }) {
  return (
    <li className={`w-full h-16 flex items-center ${className}`}>
      <AtomLink
        to={to}
        className="text-white flex items-center hover:bg-blue-500 w-[95%]  h-full pl-4 pb-0 rounded"
      >
        {icon}
        <span className="ml-4">{text}</span>
      </AtomLink>
    </li>
  );
}

export default MenuItem;
