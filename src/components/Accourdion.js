import { ExpandLess } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import classNames from "../utils/classNames";

const Accourdion = ({ defaulIsOpen, children, title }) => {
  const [isOpen, setIsOpen] = useState(defaulIsOpen);
  return (
    <div classNames={" transition-all duration-300"}>
      <div
        className=" flex items-center justify-between py-2 cursor-pointer"
        onClick={() => setIsOpen((o) => !o)}
      >
        <h1 className=" text-sm xl:text-[22px] font-semibold">{title}</h1>
        <div className="hidden xl:flex">
          <ExpandLess
            className={classNames(
              "-mr-1 ml-2 h-5 w-5 mt-1 transition-ease-in-out duration-300 xl:w-10 xl:h-10 xl:bg-white",
              !isOpen ? "rotate-180" : ""
            )}
            fontSize={"large"}
            aria-hidden="true"
          />
        </div>
        <div className="xl:hidden">
          <ExpandLess
            className={classNames(
              "-mr-1 ml-2 h-5 w-5 mt-1 transition-all duration-300 xl:w-10 xl:h-10 xl:bg-white",
              !isOpen ? "rotate-180" : ""
            )}
            fontSize={"medium"}
            aria-hidden="true"
          />
        </div>
      </div>
      <div className={classNames(isOpen ? "" : "hidden")}>{children}</div>
    </div>
  );
};

export default Accourdion;
