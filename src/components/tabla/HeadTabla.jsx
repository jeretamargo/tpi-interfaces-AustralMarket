import { useState } from "react";

export default function HeaderCell({ label, sortKey, onSort, className = "" }) {
  const [direction, setDirection] = useState(null); // null, "asc", "desc"

  const handleClick = () => {
    let newDirection = "asc";
    if (direction === "asc") newDirection = "desc";
    else if (direction === "desc") newDirection = null;
    setDirection(newDirection);
    onSort(sortKey, newDirection);
  };

  return (
    <th
      onClick={handleClick}
      className={`px-4 py-2 text-left cursor-pointer select-none whitespace-nowrap ${className}`}
    >
      <div className="flex items-center gap-2">
        <span>{label}</span>
        {direction === "asc" && <span className="text-celeste">▲</span>}
        {direction === "desc" && <span className="text-celeste">▼</span>}
        {direction === null && <span className="text-sin-presionar">⇅</span>}
      </div>
    </th>
  );
}
