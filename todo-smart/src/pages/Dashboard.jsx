import { useState } from "react";

import Header from "../components/layout/Header";
import StatsCards from "../components/layout/StatsCards";
import TaskList from "../components/task/TaskList";

export default function Dashboard() {
  const [tasks] = useState([
    {
      id: 1,
      title: "estudar React",
      description: "aperender useState e Componentização",
      date: "30/07/2026",
      completed: false,
    },
    {
      id: 2,
      title: "treino",
      description: "academia 18h",
      date: "30/07/2026",
      completed: true,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <Header />

      <StatsCards />

      <div className="bg-gray-900 rounded-xl p-6 mt-6">
        <h3 className="text-xl font-bold mb-4">Minhas tarefas</h3>

        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
