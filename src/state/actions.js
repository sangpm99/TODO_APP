import { SET_TODO, ADD_TODO, DEL_TODO} from "~/state/constants";
const setTodo = payload => {
    return {
        type: SET_TODO,
        payload
    }
}

const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

const delTodo = payload => {
    return {
        type: DEL_TODO,
        payload
    }
}

export { setTodo, addTodo, delTodo };