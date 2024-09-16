import { CircleDollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
//import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import MeuAvatar from "../avatar";

export default function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos Clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2 my-2">
          <MeuAvatar name="JS" src="https://github.com/marquesgif.png" />
          <div className="">
            <p className="text-sm sm:text-base font-semibold">Josê SAD</p>
            <span className="text-[12px] sm:text-sm text-gray-400">jose.sad159@gmail.com</span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <MeuAvatar name="JS" src="https://github.com/marquesgif.png" />
          <div className="">
            <p className="text-sm sm:text-base font-semibold">Josê SAD</p>
            <span className="text-[12px] sm:text-sm text-gray-400">jose.sad159@gmail.com</span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <MeuAvatar name="JS" src="https://github.com/marquesgif.png" />
          <div className="">
            <p className="text-sm sm:text-base font-semibold">Josê SAD</p>
            <span className="text-[12px] sm:text-sm text-gray-400">jose.sad159@gmail.com</span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
