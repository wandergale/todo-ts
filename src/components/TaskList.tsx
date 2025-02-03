// interface
import { ITask } from "../interface/Task";

// CSS
import styles from "./TaskList.module.css";

interface IProps {
  taskList: ITask[];
}

const TaskList = ({ taskList }: IProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <p>{task.title}</p>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
