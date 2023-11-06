import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Counter } from './components/Counter';
import { Task } from './components/Task';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <Counter />
        <main>
          <Task />
        </main>
      </div>
    </div>
  )
}
