"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/app/lib/api/index";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,
  });
}
