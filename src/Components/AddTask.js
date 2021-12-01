import { Form, Button } from "react-bootstrap"
import { useState } from "react"
const AddTask = ({ onAdd }) => {

    var [text, setText] = useState("")
    var [day, setDay] = useState("")
    var [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert("Please add task");
        } else if(!day){
            alert("Please add day");
            return;
        } else

             onAdd({ text, day, reminder })

            setText("")
            setDay("")
            setReminder(false)
        }

        return (
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="Add task" value={text} onChange={
                        (e) => setText(e.target.value)
                    } />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Day & Time</Form.Label>
                    <Form.Control type="text" placeholder="Day & Time" value={day} onChange={
                        (e) => setDay(e.target.value)
                    } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Set Reminder</Form.Label>
                    <Form.Check type="checkbox" value={reminder} checked={reminder} onChange={
                        (e) => setReminder(e.currentTarget.checked)
                    } />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save Task
                </Button>
            </Form>
        )
    }

    export default AddTask
