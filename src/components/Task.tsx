import styles from  './Task.module.css'
import { Trash } from '@phosphor-icons/react';

export function Task() {
    return(
        <div className={styles.task}>
            <div className={styles.taskContent}>
                <input type="checkbox" id="checkboxId"/>
                <label htmlFor = 'checkboxId'/>
                <span>Lorem Ipsum Task Text Lorem Ipsum Task Text Lorem Ipsum Task Text Lorem Ipsum Task Text</span>
            </div>
            <button title="Deletar">
                <Trash  size={24} />
            </button>
        </div>

    );
}