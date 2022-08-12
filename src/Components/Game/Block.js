import { useState, useEffect } from "react";

export const Block = ({ pushList, index, fieldSize }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      pushList(index, fieldSize);
    }
  }, [active]);

  const onBlockHover = (e) => {
    if (fieldSize === "5") {
    }
    setActive((prev) => {
      return !prev;
    });
  };

  return (
    <div
      className={`grid-item ${active ? "active" : ""}`}
      onMouseEnter={onBlockHover}
    />
  );
};
