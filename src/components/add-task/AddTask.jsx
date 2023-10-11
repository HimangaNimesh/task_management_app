import React, { useState } from 'react';
import './AddTask.css'

const AddTask = ({ onAdd }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      onAdd(taskText);
      setTaskText('');
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Enter task description"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Create Task</button>
    </div>
  );
};

export default AddTask;
