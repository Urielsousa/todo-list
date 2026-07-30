import { FaPlus } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold">To Do Smart 🚀</h1>
        <p className="text-gray-400">Suas tarefas + Google Agenda + WhatsApp</p>
      </div>

      <button className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-xl flex items-center gap-2 font-medium">
        <FaPlus />
        <span>Adicionar Tarefa</span>
      </button>
    </header>
  );
}
