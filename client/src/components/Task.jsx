import React from "react";
import { FaTimes, FaStar, FaRegStar } from "react-icons/fa";

const formatDate = (value) => {
  if (!value) return "Sem data definida";
  // Formato YYYY-MM-DD → DD/MM/AAAA (sem usar new Date para evitar erro de fuso horário)
  const parts = value.split("-");
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return value;
};

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.importante ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.uuid)}
    >
      <div className="task-content">
        <h3>{task.titulo}</h3>
        <p className="task-date">
          📅 {formatDate(task.dia_atividade)}
        </p>
      </div>
      <div className="task-actions">
        <button
          className="task-priority"
          onClick={() => onToggle(task.uuid)}
          title={task.importante ? "Remover importante" : "Marcar importante"}
        >
          {task.importante ? <FaStar /> : <FaRegStar />}
        </button>
        <button
          className="task-delete"
          onClick={() => onDelete(task.uuid)}
          title="Excluir"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Task;
