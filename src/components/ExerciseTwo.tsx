import { useState } from "react";
import { ExerciseProps } from "../types/types";

export default function ExerciseTwo({ title }: ExerciseProps) {
  const [number, setNumber] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const calculateFibonacci = (num: number) => {
    let a = 0;
    let b = 1;

    if (num === 0) return true;

    while (b <= num) {
      if (b === num) return true;
      const temp = b;
      b = a + b;
      a = temp;
    }

    return false;
  };

  const handleCheck = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("Por favor, insira um número válido");
      return;
    }

    const belongs = calculateFibonacci(num);
    setResult(
      belongs
        ? `${num} pertence à sequência de Fibonacci!`
        : `${num} NÃO pertence à sequência de Fibonacci.`
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        <div className="flex gap-4">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border p-2 rounded"
            placeholder="Digite um número"
          />
          <button
            onClick={handleCheck}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Verificar
          </button>
        </div>
        {result && <p className="text-lg">{result}</p>}
      </div>
    </div>
  );
}
