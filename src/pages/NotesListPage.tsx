import React from "react";
import { demoNotes } from "../assets/data";
import ListItem from "../components/ListItem";

const NotesListPage = () => {
  return (
    <div>
      {demoNotes.map((note) => {
        return <ListItem key={note.id} {...note} />;
      })}
    </div>
  );
};

export default NotesListPage;
