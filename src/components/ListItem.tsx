import React from "react";
import { Note } from "../assets/data";
import {Link} from "react-router-dom"
import "../App.css"

const ListItem = ({ id, body, updated }: Note) => {
  return (
    <Link to={`/notes/${id}`} className="notes-link" >
      <h3>{body}</h3>
    </Link>
  );
};

export default ListItem;
