import React from "react";

function TaskSummary({ tasks }) {
  if (!tasks || tasks.length === 0) return null;

  const total = tasks.length;
  const importantes = tasks.filter((t) => t.importante).length;
  const regulares = total - importantes;

  const pctImportantes = Math.round((importantes / total) * 100);
  const pctRegulares = Math.round((regulares / total) * 100);

  return (
    <div className="task-summary">
      <div className="summary-item">
        <div className="summary-label">
          <span>Total</span>
          <span className="summary-count">{total}</span>
        </div>
        <div className="summary-bar-track">
          <div className="summary-bar-fill summary-bar-total" style={{ width: "100%" }} />
        </div>
      </div>

      <div className="summary-item">
        <div className="summary-label">
          <span>Importantes</span>
          <span className="summary-count">{importantes}</span>
        </div>
        <div className="summary-bar-track">
          <div
            className="summary-bar-fill summary-bar-important"
            style={{ width: `${pctImportantes}%` }}
          />
        </div>
      </div>

      <div className="summary-item">
        <div className="summary-label">
          <span>Regulares</span>
          <span className="summary-count">{regulares}</span>
        </div>
        <div className="summary-bar-track">
          <div
            className="summary-bar-fill summary-bar-regular"
            style={{ width: `${pctRegulares}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskSummary;
