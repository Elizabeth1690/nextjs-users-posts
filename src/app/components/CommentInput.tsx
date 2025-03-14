"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { Comment } from "@/app/lib/types";

interface CommentInputProps {
  setLocalComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const CommentInput: React.FC<CommentInputProps> = ({ setLocalComments }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  // Validar email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validar nombre (solo letras y espacios)
  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Validando campos...");

    if (!name.trim() || !email.trim() || !body.trim()) {
      console.log("Error: Campos vacíos");
      Swal.fire({
        icon: "error",
        title: "Todos los campos son obligatorios",
        text: "Por favor, completa todos los campos antes de enviar el comentario.",
      });
      return;
    }

    if (!validateName(name.trim())) {
      console.log("Error: Nombre inválido");
      Swal.fire({
        icon: "error",
        title: "Nombre inválido",
        text: "Por favor, ingresa solo letras y espacios en el nombre.",
      });
      return;
    }

    if (!validateEmail(email.trim())) {
      console.log("Error: Correo inválido");
      Swal.fire({
        icon: "error",
        title: "Correo electrónico inválido",
        text: "Por favor, ingresa un correo electrónico válido.",
      });
      return;
    }

    console.log("Comentario válido, agregando...");

    const newComment: Comment = {
      id: Math.random(),
      name: name.trim(),
      email: email.trim(),
      body: body.trim(),
    };

    setLocalComments((prev) => [...prev, newComment]);
    setName("");
    setEmail("");
    setBody("");

    Swal.fire({
      icon: "success",
      title: "Comentario agregado",
      text: "Tu comentario ha sido añadido correctamente.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 p-4 border rounded-md">
      <h3 className="text-lg font-bold">Añadir comentario</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full p-2 border rounded my-2"
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full p-2 border rounded my-2"
      />
      <textarea
        placeholder="Comentario"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="block w-full p-2 border rounded my-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Agregar comentario
      </button>
    </form>
  );
};

export default CommentInput;
