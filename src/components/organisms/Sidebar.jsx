import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { DataSidebar } from "../../data/DataSidebar";
import MenuItem from "../molecules/MenuItem";
import AtomLink from "../atoms/link/AtomLink";
function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div>
          <div className="flex justify-start items-center">
            <AtomLink to="#" className="ml-8 text-4xl">
              <FaIcons.FaBars onClick={showSidebar} />
            </AtomLink>
          </div>
          <nav
            style={{ zIndex: 2 }}
            className={
              sidebar
                ? "bg-secondary w-64 h-screen flex justify-center fixed top-0 left-0 transition duration-350"
                : "bg-secondary w-64 h-screen flex justify-center fixed top-0 left-[-100%] transition duration-850"
            }
          >
            <ul className="w-full" onClick={showSidebar}>
              <li className="bg-secondary w-full h-20 flex justify-start items-center">
                <AtomLink to="#" className="ml-8 text-4xl text-white ">
                  <AiIcons.AiOutlineClose />
                </AtomLink>
              </li>
              {DataSidebar.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    to={item.path}
                    icon={item.icon}
                    text={item.title}
                  />
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}
export default Sidebar;
