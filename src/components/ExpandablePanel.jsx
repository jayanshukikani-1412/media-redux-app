import React, { useState } from "react";
import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex fle-row items-center justify-between">
          {header}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? (
            <GoTriangleDown size={22} />
          ) : (
            <GoTriangleLeft size={22} />
          )}
        </div>
      </div>
      {
        expanded &&<div className="p-2 border-t">{children}</div>
      }
    </div>
  );
};

export default ExpandablePanel;
