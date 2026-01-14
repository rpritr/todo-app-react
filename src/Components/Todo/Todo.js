import React, {useState, useEffect} from 'react';
import Button from "../Button/Button";
import styles from "./_todo.module.scss";
import Form from "../Form/Form";
import Input from "../Input/Input";

const Todo = () => {
    const [data, setData] = useState(false)
    const [tasks,setTasks] = useState([]);

    const addTask = (title) => {
        console.log("Task added");
        console.log(title);
        const url = 'http://localhost:3000/tasks/'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({done: false, title: title})
        }).then(res => res.json()).then(data => {
            //console.log(data);
            //setTasks(data);
            //setData(data);
        }).catch(err => console.log(err));
    }
    const changeTask = (task) => {
        console.log("Task done");
        //console.log(task);
        const url = 'http://localhost:3000/tasks/' + task.id;
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({done: !task.done})
        }).then(res => res.json()).then(data => {
           // console.log(data);
            //setTasks(data);
            //setData(data);
        }).catch(err => console.log(err));
    }

    const removeTask = (task) => {
        console.log("Task removed");
        //console.log(task);
        const url = 'http://localhost:3000/tasks/' + task.id;
        fetch(url, {
            method: 'DELETE',
           // body: JSON.stringify({done: !task.done})
        }).then(res => res.json()).then(data => {
            console.log(data);
            //setTasks(data);
            //setData(data);
        }).catch(err => console.log(err));
    }

    const getTasks = () => {
        // TODO check infinite loop
        const url = 'http://localhost:3000/tasks';
        fetch(url, {
            method: 'GET'
        }).then(res => res.json()).then(data => {
          //  console.log(data);
            setTasks(data);
            setData(data);
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        getTasks();
    })
    if(data === false) {
        return <p>Loading data...</p>
    }
    else {
        return (
            <>
                <Form>
                    <Input title="Add a task" id="task" name="task"/>
                    <Button title="Add Task" action={() => addTask(document.getElementById("task").value)}/>
                </Form>
                <div className={styles.list}>
                    { tasks.map(task => {
                        const classList = [styles.item, task.done? styles.undone : styles.done].join(" ");;
                        return (
                            <div key={task.id} className={classList}>
                                <span className={task.done? styles.undone : styles.done}>{ task.title}</span>
                                <div className={styles.actions}>
                                    { task.done ? <Button title="Undone" type="secondary-alt" size="small" action={() =>changeTask(task)} /> : <Button title="Done" type="secondary" size="small" action={() =>changeTask(task)}/>}
                                    <Button title="Remove" type="adjacent" size="small" action={() =>removeTask(task)}/>
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