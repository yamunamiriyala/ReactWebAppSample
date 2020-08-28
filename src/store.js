import React, {createContext, useReducer} from 'react';
import TodoReducer from './reducer';

const initialState = {todos:[], error:null}

export const Context = createContext(initialState)

const Store = ({children}) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Store;