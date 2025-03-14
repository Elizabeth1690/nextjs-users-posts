"use client";

import { useState } from "react";

interface SearchInputPostsProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputPostsProps> = ({
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Buscar publicaciones..."
        className="p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-sm"
      />
    </div>
  );
};
