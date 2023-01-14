import { useState } from "react";

function TasksList({ todos }) {
    
    const [list, setTodos] = useState(todos);
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState();

    function changeInput(e) {
        setValue(e.target.value)
    }

    const addTodo = (e) => {
        if(e.key === 'Enter' && value.length > 0) {
            setTodos([...list, {id: list[list.length-1].id + 1,nameTask: value}]);
            setValue('')
        }
    }
 
    function deleteTask(id) {
        setTodos((prev) => {
            return prev.filter(todo => {
                return todo.id !== id
            });
        }) 
        setChecked();
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your task here..."
                value={value}
                onChange= {changeInput}
                onKeyDown = {addTodo}
                style={{
                    border: 'none',
                    borderBottom: '1px solid #333',
                    fontSize: '24px',
                    transform: "translateX(5px)",
                    width: '100%',
                    outline: 'none'
                }}
            />
            {list.map(task => {
                return (
                    <div
                        key={task.id}
                        style={{
                            marginTop: '20px'
                        }}
                    >
                        <input
                            checked = {checked === task.id}
                            onChange = {() => deleteTask(task.id)}
                            type='radio'
                            style={{ marginRight: '20px' }} />
                        <span>{task.nameTask}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TasksList