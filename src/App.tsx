import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Counter } from './components/Counter';
import { Task } from './components/Task';

import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css';

import './global.css';

const tasks = [
  {
    id: uuidv4(),
    title: 'Estudar Javascript',
    isComplete: true
  },
  {
    id: uuidv4(),
    title: 'Estudar Typescript',
    isComplete: false
  },
  {
    id: uuidv4(),
    title: 'Estudar TailwindCSS',
    isComplete: false
  },
]


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <main>
          <Counter />
          {tasks.map(task => {
            return (
              <Task
              id={task.id}
              title={task.title}
              isComplete={task.isComplete}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

