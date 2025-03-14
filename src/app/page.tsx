import { redirect } from "next/navigation";

export default function Home() {
  redirect("/users"); // Redirección en el servidor antes del renderizado
}
