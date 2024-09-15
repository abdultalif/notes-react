import Button from "../ui/Button";
import { showFormattedDate } from "../../utils";
import styles from "./ArchivedList.module.scss";

const ArchivedList = ({ arcive, setArcive, setNotes, notes }) => {
  return (
    <div className={styles.archivedList}>
      {arcive.length === 0 && (
        <p className={styles.archivedList__empty}>Arcive is empty</p>
      )}
      {arcive.length > 0 &&
        arcive.map((note) => (
          <div className={styles.archivedList__noteItem} key={note.id}>
            <div className={styles.archivedList__noteItem__content}>
              <h2 className={styles.archivedList__noteItem__content__title}>
                {note.title}
              </h2>
              <p className={styles.archivedList__noteItem__content__date}>
                {showFormattedDate(note.createdAt)}
              </p>
              <p className={styles.archivedList__noteItem__content__body}>
                {note.body}
              </p>
            </div>
            <div className={styles.archivedList__noteItem__action}>
              <Button
                className={styles.archivedList__noteItem__action__deleteButton}
                onClick={() =>
                  setArcive(arcive.filter((n) => n.id !== note.id))
                }
              >
                Delete
              </Button>
              <Button
                className={styles.archivedList__noteItem__action__archiveButton}
                onClick={() => {
                  note.archived = false;
                  setArcive(arcive.filter((n) => n.archived === true));
                  setNotes([...notes, note]);
                }}
              >
                Active
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ArchivedList;
