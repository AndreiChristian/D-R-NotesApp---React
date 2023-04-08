import React from "react";
import { demoNotes } from "../assets/data";
import ListItem from "../components/ListItem";

const NotesListPage = () => {
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title"> &#9782; Notes </h2>
      </div>
      <div className="notes-list">
        {demoNotes.map((note) => {
          return <ListItem key={note.id} {...note} />;
        })}
      </div>
    </div>
  );
};

export default NotesListPage;
