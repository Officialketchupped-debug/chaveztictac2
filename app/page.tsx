import Image from "next/image";
import Game from "@/app/components/Game";
export default function Home() {
  return (
   <main className="grid grid-rows align-center gap-15">
     <div className="text-center">
        <h1 className="text-4xl">Tic-tac-toe</h1>
        <h2 className="text-xs"> by Jamesnel Chavez</h2>
     </div>
      <Game />
    </main>
  );
}
