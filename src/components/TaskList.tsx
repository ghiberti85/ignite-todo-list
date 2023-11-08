import { TaskType } from './NewTask';
import styles from  './TaskList.module.css'
import { Trash, ClipboardText } from '@phosphor-icons/react';


type TaskProps = {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export function TaskList ({ tasks, setTasks }: TaskProps) {
    const taskCount = tasks.length;
    const taskCompleteCount = tasks.filter(function(task) {
        return task.isComplete
    }).length;

    function handleTaskComplete(id: string) {
        setTasks(
            tasks.map(function(task) {
                if(task.id === id) {
                    task.isComplete = !task.isComplete;
                }
                return task;
            })
        );
    }

    function handleTaskDelete(id: string) {
        setTasks(
            tasks.filter(function(task) {
                return task.id !== id;
            })
        );
    }

    return(
        <div className={styles.taskContainer}>
            <div className={styles.counter}>
                <span>Tarefas criadas <strong>{taskCount}</strong></span>
                <span>Concluídas{" "}
                    {taskCount > 0 ? (
                        <strong>{taskCompleteCount} de {taskCount}</strong>
                        ) : (
                            <strong>{taskCount}</strong>
                    )}
                </span>
            </div>
            {taskCount > 0 ? (
                <div className={styles.taskList}>
                    {tasks.map((task) => (
                        <div className={styles.task}>
                            <div className={styles.taskContent}>
                                <input 
                                    type="checkbox" 
                                    id={task.id}
                                    onClick={() => handleTaskComplete(task.id)}
                                />
                                <label htmlFor = {task.id}/>
                                <span 
                                    className= {
                                        task.isComplete 
                                        ? styles.taskComplete 
                                        : styles.taskIncomplete
                                    }
                                >
                                    {task.title}
                                </span>
                            </div>
                            <button 
                                title="Delete Task"
                                onClick={() => handleTaskDelete(task.id)}
                            >
                                <Trash  size={24} />
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.emptyTaskList}>
                    <ClipboardText size={48} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            )}

        </div>

    );
}