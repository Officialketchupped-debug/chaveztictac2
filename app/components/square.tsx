import React from "react";

interface SquareProps {
  value: string | null;
  SquareClick: () => void;
}

export default function Square({ value, SquareClick }: SquareProps) {
  return (
    <button className="flex w-20 h-20 text-4xl font-bold items-center 
                       justify-center text-black-500 hover:bg-gray-200
                       border border-black" 
      onClick={SquareClick}>
      {value}
    </button>
  );
}
