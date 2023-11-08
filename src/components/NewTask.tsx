import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from '@phosphor-icons/react';
import styles from './NewTask.module.css';

export type TaskType = {
    id: string;
    title: string;
    isComplete: boolean;
};

type TaskProps = {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export function NewTask({tasks, setTasks}: TaskProps) {
    const [newTask, setNewTask] = useState("");

    function handleTaskSubmit(event: FormEvent) {
        event.preventDefault();

        setTasks([
            {
                id: uuidv4(),
                title: newTask,
                isComplete: false
            },
            ...tasks
        ]);
        setNewTask("");
    }

    function handleTaskInput(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }



    return(
        <form 
            className={styles.newTask}
            onSubmit={handleTaskSubmit}
        >
            <input 
                type="text"
                placeholder="Adicione um nova tarefa..."
                value={newTask}
                onChange={handleTaskInput}
                required
            />
            <button type="submit" title="Criar nova tarefa">               
                Criar
                <PlusCircle size={20} weight='bold'/>
            </button> 
        </form>
    );
}