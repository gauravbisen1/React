import { createSlice , nanoid } from '@reduxjs/toolkit'
//nanoid - generate unique id

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    //properties and function comes in reducers
    //dif, in contextapi we only write decleration but in redux we will write defination too
    reducers: {
        //syntax - always have access of state and action
        //state give access of initial state value
        //action -  value comes like id for remove
        addTodo: (state , action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
                //payload is object id , etc come on it and we can access
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

//to help in component
export const {addTodo , removeTodo} = todoSlice.actions


export default todoSlice.reducer

