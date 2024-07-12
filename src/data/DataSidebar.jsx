import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdCloudUpload } from "react-icons/io";

export const DataSidebar = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Upload",
    path: "/upload",
    icon: <IoMdCloudUpload />,
    cName: "nav-text",
  },
];
