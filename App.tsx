import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExerciseFive from "./src/components/ExerciseFive";
import ExerciseFour from "./src/components/ExerciseFour";
import ExerciseOne from "./src/components/ExerciseOne";
import ExerciseThree from "./src/components/ExerciseThree";
import ExerciseTwo from "./src/components/ExerciseTwo";
import Layout from "./src/components/Layout";
import Menu from "./src/components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Menu />} />
          <Route
            path="exercicio1"
            element={<ExerciseOne title="1. Soma de K" />}
          />
          <Route
            path="exercicio2"
            element={<ExerciseTwo title="2. Sequência de Fibonacci" />}
          />
          <Route
            path="exercicio3"
            element={<ExerciseThree title="3. Análise de Faturamento" />}
          />
          <Route
            path="exercicio4"
            element={<ExerciseFour title="4. Percentual por Estado" />}
          />
          <Route
            path="exercicio5"
            element={<ExerciseFive title="5. Inversão de String" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
