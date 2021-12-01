import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle }) => {
    let taskStyle = {
        backgroundColor: "beige",
        borderRadius: "5px",
        padding: "5px",
        marginTop: "7px",
        borderLeft: task.reminder ? "6px solid green" : "",
    }
    return (
        <>
            <div style={taskStyle} onDoubleClick={() => onToggle(task.id)}>
                <h3 key={task.id}>{task.text} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(task.id)} /></h3>
                <p>{task.day}</p>
            </div>
        </>
    )
}


export default Task
