import React, { useState } from "react";
import { listOfName } from "../all-array-of-object";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

interface Item {
  id: number;
  name: string;
  icon: JSX.Element;
  arrow: JSX.Element;
  childItems?: Item[];
}

export default function LeftSidebar() {
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
    function toggleItem(id: number) {
    setExpandedItemId((prevId) => (prevId === id ? null : id));
  }
  return (
    <div className="p-4">
      {listOfName.map((item) => (
        <div key={item.id}>
          <div
            className="flex items-center justify-between"
            onClick={() => toggleItem(item.id)}
          >
            {item.id}
            <div className="flex items-center gap-2">
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </div>
            <div>
              {expandedItemId === item.id ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
            </div>
          </div>
          {expandedItemId === item.id && item.childItem && (
            <div>
              {item.childItem.map((childItems) => (
                <div key={childItems.id}>
                  <div className="flex items-center gap-2">
                    <div>{childItems.icon}</div>
                    <div>{childItems.name}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
