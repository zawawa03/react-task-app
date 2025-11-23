import { Link } from "react-router-dom";
import type { Priority, Task } from "../../../types/task";
import styles from "../styles/TaskCard.module.css"

type Props = {
  task: Task;
};

export default function TaskCard( { task }: Props) {
  const getPriorityClass = (priority: Priority): string => {
    switch (priority.toLowerCase()) {
      case "high":
        return styles.highPriority
      case "medium":
        return styles.mediumPriority
      case "low":
        return styles.lowPriority
      default:
        return styles.defaultPriority      
    }
  }

  const getStatusLabel = (status: boolean): string => {
    return status ? "完了" : "未完了";
  };

  return (
    <div className={styles.taskCard}>
      <Link to={`/tasks/${task.id}`} className={styles.detailLink}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
      </Link>
      <p className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}>
        {getStatusLabel(task.status)}
      </p>
      <p className={`${styles.badge} ${getPriorityClass(task.priority)}`}>{task.priority}</p>
      <p className={`${styles.taskDueDate}`}>{task.dueDate}</p>
    </div>
  );
}
