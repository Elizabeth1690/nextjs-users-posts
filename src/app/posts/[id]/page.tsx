"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { usePost } from "@/app/hooks/usePosts";
import { useComments } from "@/app/hooks/useComments";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { Comment } from "@/app/lib/types";
import CommentInput from "@/app/components/CommentInput";

export default function PostDetailPage() {
  const { id } = useParams();

  if (!id) {
    return <p>Error: No se encontró el ID del post.</p>;
  }

  const {
    data: post,
    isLoading: isLoadingPost,
    error: errorPost,
  } = usePost(id as string);

  const {
    data: comments,
    isLoading: isLoadingComments,
    error: errorComments,
  } = useComments(id as string);

  const [localComments, setLocalComments] = useState<Comment[]>([]);

  if (isLoadingPost || isLoadingComments) return <p>Cargando...</p>;
  if (errorPost || errorComments)
    return <p>Ocurrió un error al cargar los datos.</p>;

  return (
    <div className="p-6">
      <Card className="p-4">
        <h1 className="text-2xl font-bold">{post?.title}</h1>
        <p className="text-gray-600">{post?.body}</p>
      </Card>

      <h2 className="text-xl font-semibold mt-6">Comentarios</h2>

      <CommentInput setLocalComments={setLocalComments} />
      <ul className="mt-4">
        {[...(comments || []), ...localComments].map((comment) => (
          <li key={comment.id} className="p-3 border rounded my-2">
            <p className="font-semibold">
              {comment.name} ({comment.email})
            </p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>

      <Button asChild>
        <Link href="/posts">Volver a posts</Link>
      </Button>
    </div>
  );
}
