import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../index.css";

const DarkMode = () => {
  const [theme, setTheme] = useState("lightTheme");
  const toggleTheme = () => {
    if (theme === "lightTheme") {
      setTheme("darkTheme");
    } else {
      setTheme("lightTheme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`${theme}`}>
      <button onClick={toggleTheme} className="darkmode_btn_CL ms-2 rounded" style={{width: "40px", height: "40px"}}>
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </div>
  );
};

export default DarkMode;
