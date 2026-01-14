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
                <div className={styles.list}>
                    { tasks.map(task => {
                        const classList = [styles.item, task.done? styles.undone : styles.done].join(" ");;
                        return (
                            <div key={task.id} className={classList}>
                                <span className={task.done? styles.undone : styles.done}>{ task.title}</span>
                                <div className={styles.actions}>
                                    { task.done ? <Button title="Undone" type="secondary-alt" size="small" /> : <Button title="Done" type="secondary" size="small"/>}
                                    <Button title="Remove" type="adjacent" size="small"/>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        )
    }
}

export default Todo;