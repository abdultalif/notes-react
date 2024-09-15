import { useRef, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Input from "./components/ui/Input";
import Navbar from "./components/fragments/Navbar";
import NoteForm from "./components/layouts/NoteForm";
import NoteList from "./components/layouts/NoteList";
import ArchivedList from "./components/layouts/ArchivedList";
import { getInitialData } from "./utils";
import "./styles/style.scss";

const App = () => {
  const data = getInitialData();

  const [notes, setNotes] = useState(data);
  const [arcive, setArcive] = useState([]);
  const [id, SetId] = useState(7);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const maxCharLimit = 50;
  const remainingChars = maxCharLimit - inputValue.length;

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim();
    const body = e.target.body.value.trim();

    if (!title || !body) {
      setErrorMessage("Title dan Body tidak boleh kosong!");
      return;
    }
    SetId(id + 1);

    const newNote = {
      id: id,
      title: e.target.title.value,
      body: e.target.body.value,
      createdAt: Date.now(),
      archived: false,
    };

    setNotes([...notes, newNote]);
    setInputValue("");
    e.target.body.value = "";
  };

  const handlerInput = (e) => {
    let char = e.target.value;
    setInputValue(char.slice(0, 50));
  };

  const noteItemRefs = useRef([]);

  const handlerSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    notes.forEach((note, index) => {
      const noteItem = noteItemRefs.current[index];
      if (noteItem) {
        if (note.title.toLowerCase().includes(searchValue)) {
          noteItem.classList.remove("note-item__d-none");
        } else {
          noteItem.classList.add("note-item__d-none");
        }
      }
    });
  };

  return (
    <>
      <Navbar>
        <Input
          placeholder="search title"
          className="note-app__header--search"
          type="text"
          onInput={(e) => handlerSearch(e)}
        />
      </Navbar>
      <div className="note-app__body">
        <NoteForm
          handlerSubmit={handlerSubmit}
          handlerInput={handlerInput}
          inputValue={inputValue}
          remainingChars={remainingChars}
          errorMessage={errorMessage}
        />
        <h2>Notes</h2>
        <NoteList
          notes={notes}
          noteItemRefs={noteItemRefs}
          setNotes={setNotes}
          setArcive={setArcive}
          arcive={arcive}
        />
        <h2>Archived</h2>
        <ArchivedList
          arcive={arcive}
          setArcive={setArcive}
          setNotes={setNotes}
          notes={notes}
        />
      </div>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
