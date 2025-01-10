import React from "react";
import ExerciseOne from "./src/components/ExerciseOne";
import ExerciseThree from "./src/components/ExerciseThree";
import ExerciseTwo from "./src/components/ExerciseTwo";

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Target Sistemas - Desafios</h1>
      <div className="space-y-8">
        <ExerciseOne title="1. Soma de K" />
        <ExerciseTwo title="2. Sequência de Fibonacci" />
        <ExerciseThree title="3. Análise de Faturamento" />
      </div>
    </div>
  );
}

export default App;
