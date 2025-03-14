"use client";

import { useState } from "react";
import { useUsers } from "@/app/hooks/useUsers";
import dynamic from "next/dynamic";
import { User } from "@/app/lib/types";
import { SearchInput } from "@/app/components/SearchInput";

const UserCard = dynamic(() => import("@/app/components/UserCard"), {
  ssr: false,
});

export default function UsersPage() {
  const { data: users, isLoading } = useUsers();
  const [search, setSearch] = useState("");

  if (isLoading) return <p>Cargando...</p>;

  const filteredUsers = users?.filter(
    (user: User) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
      <SearchInput value={search} onChange={setSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredUsers?.length > 0 ? (
          filteredUsers.map((user: User) => (
            <UserCard key={user.id} user={user} />
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}
