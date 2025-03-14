import Link from "next/link";
import { User } from "@/app/lib/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-base sm:text-lg break-words">
          {user.name}{" "}
          <span className="text-sm text-gray-500">(@{user.username})</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-sm mb-4 break-words">Email: {user.email}</p>
        <Button asChild className="w-full sm:w-auto">
          <Link href={`/users/${user.id}`}>Ver Detalles</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
