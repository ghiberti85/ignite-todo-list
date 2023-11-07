import styles from  './Task.module.css'
import { Trash } from '@phosphor-icons/react';


interface TaskProps {
    id: string;
    title: string;
    isComplete: boolean;
}

export function Task ({ id, title }: TaskProps) {

    return(
        <div className={styles.task}>
            <div className={styles.taskContent}>
                <input type="checkbox" id={id}/>
                <label htmlFor = {id}/>
                <span>{title}</span>
            </div>
            <button title="Delete Task">
                <Trash  size={24} />
            </button>
        </div>

    );
}