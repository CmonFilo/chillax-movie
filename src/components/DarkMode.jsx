import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../index.css";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`${theme}`}>
      <button onClick={toggleTheme} className="btn darkmode_btn_CL ms-2">
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </div>
  );
};

export default DarkMode;
