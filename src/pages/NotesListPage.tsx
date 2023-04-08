import React, { useEffect, useState } from "react";
import { Note, demoNotes } from "../assets/data";
import ListItem from "../components/ListItem";

const NotesListPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/notes");
        const data = await response.json();
        setNotes(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="notes">
        <div className="notes-header">
          <h2 className="notes-title"> &#9782; Notes </h2>
          <p className="notes-count">{demoNotes.length}</p>
        </div>
        <div className="notes-list">
          {notes!.map((note) => {
            return <ListItem key={note.id} {...note} />;
          })}
        </div>
      </div>
    );
  }
};

export default NotesListPage;
