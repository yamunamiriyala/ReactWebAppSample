const TodoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'SET_TODOS':
            return {
                ...state,
                todos: [...action.payload]
            }
        case 'EDIT_TODO':
            const newTodos = state.todos.map(todo => {
                if(todo.id === action.payload.id){
                    return {
                        ...todo, ...action.payload
                    }
                }
                else{
                    return todo
                }
            })
            return {
                ...state,
                todos: [...newTodos]
            }         
        default:
            return state;       
    }
}

export default TodoReducer;