import { Header } from './components/Header';
import { NewTask, TaskType } from './components/NewTask';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';

import './global.css';
import { useState } from 'react';

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask tasks={tasks} setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </div>
    </>
  )
}

