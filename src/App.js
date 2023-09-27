import { useRef } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {addTodo, delTodo, setTodo} from './state'
import { useStore } from "./store";

function App() {
    const [state, dispatch] = useStore();
    const {todos, todoInput} = state;

    const refInput = useRef();

    return (
        <div className="container">
            <div className="box">
                <h1>TODO LIST</h1>
                <div className="box-input">
                    <input
                        type="text"
                        ref={refInput}
                        value={todoInput}
                        placeholder="Add your new todo"
                        onChange={e => {
                            dispatch(setTodo(e.target.value))
                        }}
                    />
                    <button
                        onClick={() => {
                            dispatch(addTodo(todoInput));
                            dispatch(setTodo(""));
                            refInput.current.focus();
                        }}
                    ><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <ul>
                    {
                        todos && todos.map((todo, index) => {
                            return (
                                <li key={index}>
                                    <p>{todo}</p>
                                    <button onClick={() => {dispatch(delTodo(index))}}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default App;