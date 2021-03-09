import React from "react";

function Header({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="description">{description}</div>
    </div>
  );
}

export default Header;
