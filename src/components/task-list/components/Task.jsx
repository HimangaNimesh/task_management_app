import React from 'react';
import { DeleteIcon } from '../../../assets/icons/Icons';
import './Task.css'

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <div className="task">
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}><DeleteIcon /></button>
    </div>
    </div>
  );
};

export default Task;