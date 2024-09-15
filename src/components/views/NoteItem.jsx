import Button from "../ui/Button";
import styles from "./NoteItem.module.scss";
import { showFormattedDate } from "../../utils";

const NoteItem = ({
  note,
  index,
  noteItemRefs,
  setNotes,
  notes,
  setArcive,
  arcive,
}) => {
  return (
    <div
      className={styles.noteItem}
      ref={(ref) => (noteItemRefs.current[index] = ref)}
      key={note.id}
    >
      <div className={styles.noteItem__content}>
        <h2 className={styles.noteItem__content__title}>{note.title}</h2>
        <p className={styles.noteItem__content__date}>
          {showFormattedDate(note.createdAt)}
        </p>
        <p className={styles.noteItem__content__body}>{note.body}</p>
      </div>
      <div className={styles.noteItem__action}>
        <Button
          type={"button"}
          className={styles.noteItem__action__deleteButton}
          onClick={() => setNotes(notes.filter((n) => n.id !== note.id))}
        >
          Delete
        </Button>
        <Button
          type={"button"}
          className={styles.noteItem__action__archiveButton}
          onClick={() => {
            note.archived = true;
            setNotes(notes.filter((n) => n.archived === false));
            setArcive([...arcive, note]);
          }}
        >
          Archive
        </Button>
      </div>
    </div>
  );
};

export default NoteItem;
