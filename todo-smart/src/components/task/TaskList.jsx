import TaskCard from "./TaskCard";

export default function Tasklist({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Nenhuma Tarefa encontrada ✨
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
