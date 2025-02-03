import styles from "./TaskForm.module.css";

interface IProps {
  btnText: string;
}

const TaskForm = ({ btnText }: IProps) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" placeholder="Título da tarefa" name="title" />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" placeholder="Título da tarefa" name="difficulty" />
      </div>

      <input type="submit" className={styles.btn} value={btnText} />
    </form>
  );
};

export default TaskForm;
