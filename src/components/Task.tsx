import styles from  './Task.module.css'
import { Trash } from '@phosphor-icons/react';

export function Task() {
    return(
        <div className={styles.task}>
            <div className={styles.taskContent}>
                <input type="checkbox" name="Task" />
                <span>Lorem Ipsum Task Text</span>
            </div>
            <Trash size={20} />
        </div>

    );
}