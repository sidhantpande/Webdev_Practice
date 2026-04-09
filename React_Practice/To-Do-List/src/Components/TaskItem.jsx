function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div>
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
}

export default TaskItem;