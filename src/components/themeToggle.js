import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

// STYLE
import "../styles/toggleBtn.scss";

const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="toggleTheme">
          <div
            className={`toggleTheme__circle ${
              theme === "dark" ? "pushtoright" : ""
            }`}
            id="toggle-dark-mode"
            onClick={e => {
              theme === "dark"
                ? e.target.classList.remove("pushtoright")
                : e.target.classList.add("pushtoright");
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
