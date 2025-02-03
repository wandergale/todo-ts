import React from "react";

interface IProps {
  btnText: string;
}

const TaskForm = ({ btnText }: IProps) => {
  return (
    <form>
      <div>
        <label htmlFor="title">Título:</label>
        <input type="text" placeholder="Título da tarefa" name="title" />
      </div>

      <div>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" placeholder="Título da tarefa" name="difficulty" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
