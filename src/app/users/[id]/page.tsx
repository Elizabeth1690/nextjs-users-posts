import { fetchUserById } from "@/app/lib/api";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { id?: string };
}) {
  const { id } = await params;

  if (!id) {
    return { title: "Usuario no encontrado" };
  }

  const userId = Number(id);
  if (isNaN(userId)) {
    return { title: "Usuario no válido" };
  }

  return { title: `Usuario ${userId}` };
}

export default async function UserDetail({
  params,
}: {
  params: { id?: string };
}) {
  const { id } = await params;
  if (!id) {
    return notFound();
  }

  const userId = Number(id);
  if (isNaN(userId)) {
    return notFound();
  }

  const user = await fetchUserById(userId);

  if (!user) {
    return notFound();
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Teléfono:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
          <p>
            <strong>Dirección:</strong> {user.address.city},{" "}
            {user.address.street}
          </p>
          <Button asChild className="mt-4">
            <Link href="/users">Volver</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
