import React, { useState } from 'react';
import './App.css';
import TaskList from './components/task-list/TaskList';
import AddTask from './components/add-task/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry' },
    { id: 2, text: 'Go for a run' },
    { id: 3, text: 'Drink plenty of water' },
    { id: 4, text: 'Check mails' },
    { id: 5, text: 'Attend meetings' }
  ]);

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>Task Management App</h1>
        <hr className="hr-line" />
      </div>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
