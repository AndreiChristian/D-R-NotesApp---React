import React from "react";
import { demoNotes } from "../assets/data";

const NotesListPage = () => {
  return (
    <div>
      <h1>Notes List Page</h1>
      {demoNotes.map((note) => {
        return <>
        <p>{note.body}</p>
        <p>{note.updated}</p>
        </>
        ;
      })}
    </div>
  );
};

export default NotesListPage;
