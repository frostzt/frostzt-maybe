import React from "react";

import "../styles/miniProfile.scss";

const Personal = () => {
  return (
    <div className="personalProfile">
      <div className="personalProfile__container">
        <img
          className="personalProfile__container--image"
          src="https://avatars.githubusercontent.com/frostzt"
        />
      </div>
      <div className="personalProfile__text">
        <h3 className="personalProfile__text--title">
          Blog by Sourav Singh Rawat
        </h3>
        <span className="personalProfile__text--desc">
          These are my personal opinions, not to be taken seriously!
        </span>
      </div>
    </div>
  );
};

export default Personal;
