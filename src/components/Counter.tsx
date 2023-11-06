import styles from  './Counter.module.css'

export function Counter() {
    return(
        <div className={styles.counter}>
            <span>Tarefas criadas <strong>5</strong></span>
            <span>Concluídas <strong>2 de 5</strong></span>
        </div>
    );
}