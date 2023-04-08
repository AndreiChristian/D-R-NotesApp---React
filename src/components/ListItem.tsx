import React from "react";
import { Note } from "../assets/data";

const ListItem = ({ id, body, updated }: Note) => {
  return (
    <div>
      <h5>{body}</h5>
      <p>{updated}</p>
    </div>
  );
};

export default ListItem;
