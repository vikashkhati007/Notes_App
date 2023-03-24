import React, { useState } from "react";
import NewNotes from "./NewNotes";
import "../styles.css";
import { v4 as uuidv4 } from "uuid";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);

  function addNewNotes() {
    const newNote = { id: uuidv4(), color: getRandomColor() };
    setNotes([...notes, newNote]);
  }

  function DeleteNotes(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function getRandomColor() {
    const colors = [
      "red",
      "yellow",
      "green",
      "blue",
      "orange",
      "purple",
      "pink",
      "turquoise",
      "magenta",
      "lime",
      "teal",
      "navy",
      "maroon",
      "olive",
      "grey"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="container">
      <button
        onClick={addNewNotes}
        style={{ cursor: "pointer" }}
        className="button"
      >
        + New Note
      </button>
      <div
        className="notescontainer"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 25,
          flexWrap: "wrap"
        }}
      >
        {notes.map((note) => (
          <NewNotes key={note.id} note={note} onClick={DeleteNotes} />
        ))}
      </div>
    </div>
  );
}
