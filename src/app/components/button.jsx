import React from "react";
import { Link } from "react-router-dom";

const Button = ({ onLocalStore, title }) => {
  return (
    <Link to="/setCardStudent">
      <button className="btn btn-primary m-3" onClick={onLocalStore}>
        {title}
      </button>
    </Link>
  );
};

export default Button;
