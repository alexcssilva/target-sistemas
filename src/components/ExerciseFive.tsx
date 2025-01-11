import { useState } from "react";
import { ExerciseProps } from "../types/types";

export default function ExerciseFive({ title }: ExerciseProps) {
  const [inputString, setInputString] = useState("");
  const [result, setResult] = useState("");

  const reverseString = (str: string) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };

  const handleReverse = () => {
    setResult(reverseString(inputString));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            className="border p-2 rounded flex-grow"
            placeholder="Digite uma string"
          />
          <button
            onClick={handleReverse}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Inverter
          </button>
        </div>
        {result && (
          <p className="text-lg">
            String invertida: <span className="font-mono">{result}</span>
          </p>
        )}
      </div>
    </div>
  );
}
