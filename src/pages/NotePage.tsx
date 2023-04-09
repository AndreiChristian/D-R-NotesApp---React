import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Note, demoNotes } from "../assets/data";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "../UI/ProgressBar";

const NotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [noteState, setNoteState] = useState<Note>({
    id: 0,
    body: "",
    updated: "",
  });

  const getNote = async () => {
    try {
      const response = await fetch(`http://localhost:3000/notes/${id}`);
      const data = await response.json();
      setNoteState(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNote();
  }, []);

  const handlePatch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...noteState,
          updated: new Date().toString(),
        }),
      });
      const data = await response.json();
      console.log("successful" && data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading && <ProgressBar />}
      <div className="note">
        <div className="note-header">
          <h3>
            <Link
              to={"/"}
              onClick={() => {
                if (noteState.body === "") {
                  handleDelete();
                } else {
                  handlePatch();
                }
              }}
            >
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
          <button
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </button>
        </div>
        <textarea
          value={noteState.body}
          onChange={(event) => {
            setNoteState({ ...noteState, body: event.target.value });
          }}
        ></textarea>
      </div>
    </>
  );
};

export default NotePage;
