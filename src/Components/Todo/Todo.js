import React, {useState, useEffect} from 'react';
import Button from "../Button/Button";
import styles from "./_todo.module.scss";

const Todo = () => {
    const [data, setData] = useState(false)
    const [tasks,setTasks] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3000/tasks';
        fetch(url, {
            method: 'GET'
        }).then(res => res.json()).then(data => {
            console.log(data);
            setTasks(data);
            setData(data);
        }).catch(err => console.log(err));
    },[])
    if(data === false) {
        return <p>Loading data...</p>
    }
    else {
        return (
            <>
                <ul className={styles.list}>
                    { tasks.map(task => (
                        <li key={task.id}>
                            { task.title + " " + task.done}
                            <Button title="Done"/>
                            <Button title="Remove"/>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default Todo;