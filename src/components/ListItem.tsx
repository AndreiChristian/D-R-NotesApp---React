import React from "react";
import { Note } from "../assets/data";
import { Link } from "react-router-dom";
import "../App.css";

const ListItem = ({ id, body, updated }: Note) => {
  return (
    <Link to={`/notes/${id}`} className="notes-link">
      <div className="notes-list-item">
        <h3>{body}</h3>
      </div>
    </Link>
  );
};

export default ListItem;
