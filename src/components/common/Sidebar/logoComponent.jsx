import React from "react";

import "./sidebar.scss";

export default function LogoComponent() {
  return (
    <div className="slider">
      <div className="line"></div>
      <div className="container-img-text">
        <span
          style={{
            fontSize: "18px",
            marginLeft: "7px",
            position: "relative",
            bottom: "9px",
          }}
        >
          Land Transfer System
        </span>
      </div>
    </div>
  );
}
