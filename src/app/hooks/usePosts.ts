"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts, fetchPostById } from "@/app/lib/api/index";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
  });
}
export function usePost(id: string) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
    staleTime: 1000 * 60 * 5,
  });
}
