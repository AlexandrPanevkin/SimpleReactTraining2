import React, {useState} from 'react';

type TasksType = {
    id: number
    title: string
}

type CustomType = TasksType & {
    isDone: boolean
}

export const LocalStorage = () => {
    const [showTasks, setShowTasks] = useState<CustomType[]>([])
    const tasks: CustomType[] = [
        {id: 1, title: 'qwe', isDone: true},
        {id: 2, title: 'asd', isDone: false},
        {id: 3, title: 'zxc', isDone: true},
    ]

    const saveTodolistHandler = () => {
        const StateString = JSON.stringify(tasks)
        localStorage.setItem('tasksKey', StateString)
    }

    const ShowFromTodoHandler = () => {
        const StateString = localStorage.getItem('tasksKey')
        if (StateString !== null) {
            setShowTasks(JSON.parse(StateString))
        }
    }

    const removeLocalStorage = () => {
        localStorage.removeItem('tasksKey')
        setShowTasks([])
    }

    return (
        <div>
            <h1>LocalStorage</h1>
            <button onClick={saveTodolistHandler}>SaveTodo</button>
            <button onClick={ShowFromTodoHandler}>ShowFromTodo</button>
            <button onClick={removeLocalStorage}>RemoveLocalStorage</button>

            {
                showTasks.length > 0
                    ? <ul>
                        {
                            showTasks.map(t =>
                                <li key={t.id}>
                                    <input type='checkbox' checked={t.isDone}/>
                                    <span>{t.title}</span>
                                </li>
                            )
                        }
                    </ul>
                    : <div>Empty</div>
            }

        </div>
    );
};