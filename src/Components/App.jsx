import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      <div className="note-container">
        {notes.map((singleNote) => (
          <Note
            key={singleNote.key}
            title={singleNote.title}
            content={singleNote.content}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
