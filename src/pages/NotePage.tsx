import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Note, demoNotes } from "../assets/data";
import { Link } from "react-router-dom";

const NotePage = () => {
  const { id } = useParams();
  const note = demoNotes.find((n) => n.id === +id!);
  const [noteState, setNoteState] = useState(note?.body);

  return (
    <>
      <div className="note">
        <div className="note-header">
          <h3>
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </Link>
          </h3>
        </div>
        <textarea
          value={noteState}
          onChange={(event) => {
            setNoteState(event.target.value);
          }}
        ></textarea>
      </div>
    </>
  );
};

export default NotePage;
