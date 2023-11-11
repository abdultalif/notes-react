import React, { useState } from "react";
import TextArea from "./TextArea";

const NoteForm = () => {
    const [note, setNote] = useState("");

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Catatan:", note);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextArea
                name="note"
                value={note}
                onInput={handleNoteChange}
                placeholder="Catatan..."
                className="your-class-name"
            />
            <button type="submit">Simpan</button>
        </form>
    );
};

export default NoteForm;
