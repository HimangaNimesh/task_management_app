import React from 'react';
import Task from './components/Task';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;