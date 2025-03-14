"use client";

import { useState } from "react";
import { usePosts } from "@/app/hooks/usePosts";
import { SearchInput } from "@/app/components/SearchInputPosts";
import { Card } from "@/app/components/ui/card";
import { SortButton } from "@/app/components/SortButton";
import { Post as PostType } from "@/app/lib/types";
import Link from "next/link";

export default function PostsPage() {
  const { data: posts, isLoading } = usePosts();
  const [search, setSearch] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  if (isLoading) return <p>Cargando...</p>;

  const filteredPosts = posts
    ?.filter((post: PostType) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a: PostType, b: PostType) => {
      const isExactMatchA = a.title.toLowerCase() === search.toLowerCase();
      const isExactMatchB = b.title.toLowerCase() === search.toLowerCase();

      if (isExactMatchA && !isExactMatchB) return -1;
      if (!isExactMatchA && isExactMatchB) return 1;

      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-4">
        <SearchInput value={search} onChange={setSearch} />
        <SortButton
          sortOrder={sortOrder}
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts?.map((post: PostType) => (
          <Card key={post.id} className="p-4">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-500 mt-2 block"
            >
              Ver más
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
