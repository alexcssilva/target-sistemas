import { ExerciseProps } from "../types/types";

export default function ExerciseFour({ title }: ExerciseProps) {
  const faturamentoPorEstado = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 },
  ];

  const calculatePercentages = () => {
    const total = faturamentoPorEstado.reduce(
      (acc, item) => acc + item.valor,
      0
    );
    return faturamentoPorEstado.map((item) => ({
      estado: item.estado,
      percentual: (item.valor / total) * 100,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-2">
        {calculatePercentages().map((item) => (
          <p key={item.estado}>
            {item.estado}: {item.percentual.toFixed(2)}%
          </p>
        ))}
      </div>
    </div>
  );
}
