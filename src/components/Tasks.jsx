import NewTasks from "./NewTasks.jsx";

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTasks onAdd={onAddTask} />
            {!tasks.length ? (
                <p className="text-stone-800 my-4">
                    This title does not have any task yet.
                </p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span>
                            <button
                                onClick={() => onDeleteTask(task.id)}
                                className="text-stone-700 hover:text-red-500"
                            >
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Tasks;
