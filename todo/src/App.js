import { useState } from "react";
import Form from "./components/Form/Form";

function App() {

    let [tasks, setTasks] = useState([])

    const submit_form = event => {
        event.preventDefault()
        let { day, importance, description } = event.target

        const newTask = {
            id: Date.now(),
            day: day.value,
            importance: importance.value,
            description: description.value
        }

        tasks.push(newTask)

        setTasks([...tasks])
        console.log(tasks);
    }

    return (
        <div>
            <Form submit_form={submit_form} />
        </div>
    );

}

export default App;
