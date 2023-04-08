import React from "react";
import { useParams } from "react-router-dom";
import { Note, demoNotes } from "../assets/data";

const NotePage = () => {
  const { id } = useParams();

  const note = demoNotes.find((n) => n.id === +id!);

  return (
    <>
      <div>
        <p>{note?.body}</p>
      </div>
    </>
  );
};

export default NotePage;
