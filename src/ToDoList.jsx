/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

 function Todolist() {
    const [tasks, setTasks] = useState(["trial task 1", "trial task 2", "trial task 3"]);
    const [newTask, setNewTask] = useState("");


function handleInputChange(event){
    setNewTask(event.target.value);
}

function addTask() {
    const trimmedTask = newTask.trim(); // Trim leading/trailing spaces from the task

    if (trimmedTask === "") {
        return; // Prevent adding empty or whitespace-only tasks
    }

    setTasks([...tasks, trimmedTask]); // Add the trimmed task to the list
    setNewTask(""); // Clear the input field
}

    
    function deleteTask(index) {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }
    function moveTaskup(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskdown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text"
                    placeholder="Enter a new task"
                    value={newTask}
                    onChange={handleInputChange}
                />

                <button onClick={addTask}>Add Task</button>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskup(index)}
                            >
                                up
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskdown(index)}
                            >
                                down
                            </button>


                        </li>
                    )}
                </ol>

            </div>
        </div>
    );

}

export default Todolist
