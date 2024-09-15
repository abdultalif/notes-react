import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import styles from "./NoteForm.module.scss";

const NoteForm = ({
  handlerSubmit,
  handlerInput,
  inputValue,
  remainingChars,
  errorMessage,
}) => {
  return (
    <form className={styles.noteform} onSubmit={(e) => handlerSubmit(e)}>
      <h2>Create Notes</h2>
      <p className={styles.noteform__charLimit}>
        Remaining characters: {remainingChars}
      </p>
      {errorMessage && (
        <p className={styles.noteform__errorMessage}>{errorMessage}</p>
      )}
      <Input
        name="title"
        onInput={handlerInput}
        value={inputValue}
        className={styles.noteform__input}
        type="text"
        placeholder="title"
      />
      <TextArea
        name="body"
        className={styles.noteform__textarea}
        placeholder="body"
      />
      <Button className={styles.noteform__button} type="submit">
        Create
      </Button>
    </form>
  );
};

export default NoteForm;
