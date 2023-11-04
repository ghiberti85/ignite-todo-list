import styles from './Header.module.css'

import igniteToDoLogo from '../assets/todo-logo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={igniteToDoLogo} alt="Ignite ToDo Logo" />
        </header>
    );
}