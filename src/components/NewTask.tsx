import styles from './NewTask.module.css';

import { PlusCircle } from '@phosphor-icons/react';
export function NewTask() {
    return(
        <article className={styles.newtask}>
            <input 
                type="text"
                placeholder="Adicione um nova tarefa"
            />
            <button type="submit">               
                Criar
                <PlusCircle size={20} />
            </button> 
        </article>
    );
}