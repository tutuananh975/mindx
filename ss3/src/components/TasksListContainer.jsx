import TasksList from "./TaskList";

function TaskListContainer() {
    const list = [
        {
            id: 1,
            nameTask: 'Clean up bedroom'
        },
        {
            id: 2,
            nameTask: 'Buy some milk'
        },
        {
            id: 3,
            nameTask: 'Jogging'
        },
        {
            id: 4,
            nameTask: 'Learn React'
        },
        {
            id: 5,
            nameTask: 'Doing Exercises'
        }
    ]


    return (
        <div>
            <TasksList
                todos={list}
            ></TasksList>
        </div>
    )
}

export default TaskListContainer