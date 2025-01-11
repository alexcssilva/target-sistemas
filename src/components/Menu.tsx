import { Link } from "react-router-dom";

export default function Menu() {
  const exercises = [
    { id: 1, title: "Soma de K", path: "exercicio1" },
    { id: 2, title: "Sequência de Fibonacci", path: "exercicio2" },
    { id: 3, title: "Análise de Faturamento", path: "exercicio3" },
    { id: 4, title: "Percentual por Estado", path: "exercicio4" },
    { id: 5, title: "Inversão de String", path: "exercicio5" },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Selecione um exercício:</h2>
      <div className="grid gap-4">
        {exercises.map((exercise) => (
          <Link
            key={exercise.id}
            to={exercise.path}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-between items-center group"
          >
            <div>
              <span className="text-lg font-semibold">
                Exercício {exercise.id}
              </span>
              <p className="text-gray-600">{exercise.title}</p>
            </div>
            <span className="text-red-500 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
