import NoteItem from "../views/NoteItem";
import styles from "./NoteList.module.scss";

const NoteList = ({ notes, noteItemRefs, setNotes, setArcive, arcive }) => {
  return (
    <div className={styles.noteList}>
      {notes.length === 0 && (
        <p className={styles.noteList__empty}>Notes is empty</p>
      )}
      {notes.length > 0 &&
        notes.map((note, index) => (
          <NoteItem
            key={note.id}
            note={note}
            index={index}
            noteItemRefs={noteItemRefs}
            setNotes={setNotes}
            notes={notes}
            setArcive={setArcive}
            arcive={arcive}
          />
        ))}
    </div>
  );
};

export default NoteList;
