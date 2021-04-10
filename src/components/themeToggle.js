import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

// STYLE
import "../styles/toggleBtn.scss";

const ThemeToggle = () => {
  const changeStyle = e => {
    e.target.classList.add("pushtoright");
  };

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="toggleTheme">
          <div
            className="toggleTheme__circle"
            onClick={e => {
              changeStyle(e);
              return theme === "dark"
                ? toggleTheme("light")
                : toggleTheme("dark");
            }}
          />
        </div>
      )}
    </ThemeToggler>
  );
};

export default ThemeToggle;
