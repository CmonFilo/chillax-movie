import React, { useEffect, useState } from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

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
      <button className="btn darkmode_btn_CL ms-2" onClick={toggleTheme}>
        {" "}
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </div>
  );
};

export default DarkMode;
