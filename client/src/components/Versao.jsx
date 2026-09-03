import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";

const Versao = () => {
  const [versao, setVersao] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVersao = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${apiUrl}/api/versao`, { cache: "no-cache" });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        const text = await res.text();
        setVersao(text);
      } catch (err) {
        setError(err.message || "Não foi possível carregar a versão da API.");
      } finally {
        setLoading(false);
      }
    };

    fetchVersao();
  }, []);

  return (
    <div className="versao-page">
      <div className="versao-content">
        <div className="versao-card">
          <div className="versao-card-header">
            <span className="versao-icon">🚀</span>
            <h2>Versão da API</h2>
          </div>

          {loading && (
            <div className="versao-loading">
              <span className="versao-spinner" />
              <p>Consultando API...</p>
            </div>
          )}

          {!loading && error && (
            <div className="versao-error">
              <span className="versao-error-icon">⚠️</span>
              <p>Não foi possível obter a versão.</p>
              <small>{error}</small>
            </div>
          )}

          {!loading && !error && versao && (
            <div className="versao-result">
              <p className="versao-label">Endpoint: <code>/api/versao</code></p>
              <p className="versao-value">{versao}</p>
            </div>
          )}
        </div>
      </div>

      <div className="versao-footer">
        <Link to="/" className="back-button">
          ← Voltar
        </Link>
      </div>
    </div>
  );
};

export default Versao;
