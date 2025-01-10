import { useEffect, useState } from "react";
import faturamentoData from "../data/dados.json";
import { ExerciseProps, FaturamentoDiario } from "../types/types";

export default function ExerciseThree({ title }: ExerciseProps) {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [daysAboveAverage, setDaysAboveAverage] = useState<number>(0);

  useEffect(() => {
    calculateMetrics();
  }, []);

  const calculateMetrics = () => {
    const validDays: FaturamentoDiario[] = faturamentoData.filter(
      (day: FaturamentoDiario) => day.valor > 0
    );

    // Menor valor
    const min = Math.min(...validDays.map((day) => day.valor));
    setMinValue(min);

    // Maior valor
    const max = Math.max(...validDays.map((day) => day.valor));
    setMaxValue(max);

    // Média mensal (ignorando dias sem faturamento)
    const average =
      validDays.reduce((acc, day) => acc + day.valor, 0) / validDays.length;

    // Dias acima da média
    const aboveAverage = validDays.filter((day) => day.valor > average).length;
    setDaysAboveAverage(aboveAverage);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        <p>Menor valor de faturamento: R$ {minValue.toFixed(2)}</p>
        <p>Maior valor de faturamento: R$ {maxValue.toFixed(2)}</p>
        <p>Número de dias acima da média: {daysAboveAverage}</p>
      </div>
    </div>
  );
}
