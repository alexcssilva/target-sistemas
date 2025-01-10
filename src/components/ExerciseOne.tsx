import React from "react";
import { ExerciseProps } from "../types/types";

export default function ExerciseOne({ title }: ExerciseProps) {
  const calculateSum = () => {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
      k = k + 1;
      soma = soma + k;
    }

    return soma;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        <p className="font-mono bg-gray-100 p-4 rounded">
          INDICE = 13
          <br />
          SOMA = 0<br />
          K = 0<br />
          Enquanto K &lt; INDICE faça:
          <br />
          {"{"}
          <br />
          &nbsp;&nbsp;K = K + 1<br />
          &nbsp;&nbsp;SOMA = SOMA + K<br />
          {"}"}
          <br />
        </p>
        <p className="text-lg">
          O valor final da soma é:{" "}
          <span className="font-bold">{calculateSum()}</span>
        </p>
      </div>
    </div>
  );
}
