import React from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from './models/model';

const App: React.FC = () => {
    
    const [todo, setTodo] = React.useState<string>("");
    const [todoList, setTodoList] = React.useState<Todo[]>([]);

    function handleAdd(e: React.FormEvent) {
        e.preventDefault();

        if (todo) {
            setTodoList([ ...todoList, { id: Date.now(), todo: todo, isDone: false} ])
            setTodo("");
        }
    }

    return (
        <>
            <div className="App">
                <span className="heading">Taskify</span>
                <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
            </div>
        </>
    );
};

export default App;
