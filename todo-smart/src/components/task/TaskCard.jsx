import { FaCheckCircle, FaRegCircle, FaTrash } from "react-icons/fa";

export default function TaskCard({ task }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 flex justify-between items-center hover:border-green-500 transition">
      <div>
        <h3 className="text-lg font-semibold">{task.title}</h3>

        <span className="text-xs text-blue-400 mt-2 block">
          {" "}
          📅 {task.date}
        </span>
      </div>
      <div className="flex gap-4 text-xl">
        {task.completed ? (
          <FaCheckCircle className="text-green-500 cursor-pointer" />
        ) : (
          <FaRegCircle className="text-yellow-400 cursor-pointer" />
        )}
        <FaTrash className="text-red-500 cursor-pointer" />
      </div>
      )
    </div>
  );
}
