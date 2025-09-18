import React from "react";
import Square from "@/app/components/square";
import {calculateWinner} from "@/app/utils/calculateWinner";


interface BoardProps {
    xIsNext: boolean;
    squares: (string|null)[];
    onPlay: (nextSquares: (string | null)[]) => void;
}

export default function Board({xIsNext,squares,onPlay}:BoardProps){
     function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-xl font-semibold">{status}</div>

      <div className="grid grid-cols-3 gap-1">
        {squares.map((square, i) => (
          <Square key={i} value={square} SquareClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}