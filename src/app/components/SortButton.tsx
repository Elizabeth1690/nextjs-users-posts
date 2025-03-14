import React from "react";

interface SortButtonProps {
  sortOrder: "asc" | "desc";
  onClick: () => void;
}

export const SortButton: React.FC<SortButtonProps> = ({
  sortOrder,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors flex-shrink-0 text-sm md:text-base whitespace-nowrap"
    >
      Ordenar: {sortOrder === "asc" ? "Ascendente" : "Descendente"}
    </button>
  );
};
