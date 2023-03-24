import React, { useRef, useEffect } from "react";
import "../styles.css";
import { NoteStyle, DeleteIcon, Icons } from "./NoteStyle";
import { MdOutlineNoteAlt, MdDeleteForever } from "react-icons/md";

export default function NewNotes({ note, onClick, text }) {
  const conatinerheader = {
    backgroundColor: note.color || "white"
  };

  const notestyle = {
    border: `0.5px solid ${note.color}`,
    borderRadius: "0px 0px 5px 5px",
    boxShadow: `0px 3px 4px 1px rgba(0,0,0,0.2)`
  };
  const InputHandle = useRef();

  useEffect(() => {
    InputHandle.current.focus();
  }, []);
  return (
    <NoteStyle>
      <div className="conatinerheader" style={conatinerheader}>
        <Icons>
          <MdOutlineNoteAlt style={{ cursor: "pointer" }} />
          <DeleteIcon>
            <MdDeleteForever
              style={{ cursor: "pointer" }}
              onClick={() => onClick(note.id)}
            />
          </DeleteIcon>
        </Icons>
      </div>
      <div className="cardbody" style={notestyle}>
        <textarea ref={InputHandle} className="textareastyle">
          {text}
        </textarea>
      </div>
    </NoteStyle>
  );
}
