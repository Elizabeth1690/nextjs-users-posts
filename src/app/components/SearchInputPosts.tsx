"use client";

import Swal from "sweetalert2";
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

  const showAlert = (message: string) => {
    Swal.fire({
      icon: "warning",
      title: "Entrada inválida",
      text: message,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!inputValue.trim()) {
        showAlert("El campo no puede estar vacío.");
        return;
      }
      if (/[^a-zA-Z0-9]/.test(inputValue)) {
        showAlert("Solo se permiten letras y números.");
        return;
      }
      onChange(inputValue);
    }
  };

  return (
    <div className="w-full">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Buscar publicaciones..."
        className="p-2 border rounded-md w-full focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-sm"
      />
    </div>
  );
};
