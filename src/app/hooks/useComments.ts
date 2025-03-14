"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "@/app/lib/api/index"

export function useComments(id: string) {
  return useQuery({
    queryKey: ["comments", id],
    queryFn: () => fetchComments(id),
    staleTime: 1000 * 60 * 5,
  });
}
