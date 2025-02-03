// CSS
import styles from "./TaskForm.module.css";

// hooks
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// interface
import { ITask } from "../interface/Task";

interface IProps {
  btnText: string;
}

const TaskForm = ({ btnText }: IProps) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
    console.log(title, difficulty);
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          placeholder="Título da tarefa"
          name="title"
          onChange={handleChange}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          placeholder="Título da tarefa"
          name="difficulty"
          onChange={handleChange}
        />
      </div>

      <input type="submit" className={styles.btn} value={btnText} />
    </form>
  );
};

export default TaskForm;
