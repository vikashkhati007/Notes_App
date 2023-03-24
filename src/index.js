import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NotesApp from "./components/NotesApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NotesApp />
  </StrictMode>
);
