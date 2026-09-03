import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";
import VersionInfo from "./VersionInfo";

const Header = ({ title }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Tarefas</Link>
        <Link to="/versao" className="nav-link">Versão</Link>
      </nav>
      <div className="header-controls">
        <VersionInfo />
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          title={isDarkMode ? "Tema claro" : "Tema escuro"}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "BIA 2026",
};

export default Header;
