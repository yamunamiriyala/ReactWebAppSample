import React, {useEffect, useContext} from 'react';
import Header from './Header';
import axios from 'axios';
import ClassComponent from './ClassComponent'
import {Context} from './store';

function Home() { 
    const [state, dispatch] = useContext(Context)
    // console.log('state', state)
    const addTodo = () => {
        const todo = {
            userId: 1,
            id: Math.random() * 100,
            title: 'new todo',
            completed: true
        }
        dispatch({type: 'ADD_TODO', payload: todo})
    }
    const removeTodo = (id) => {
        dispatch({type: 'REMOVE_TODO', payload: id})

    }
    const editTodo = (todo) => {
        const updatedTodo = {
            ...todo,
            title:'some ne todo',
            completed: false
        }
        dispatch({type: 'EDIT_TODO', payload: updatedTodo})

    }
    useEffect(() => {
        const fecthData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
            dispatch({type: 'SET_TODOS', payload: response.data.filter(obj => obj.id < 6)})
            //console.log('response', response.data)
            //setData(response.data)
        }
        fecthData();
        // convert the fetchData to promise
  // cmd /  - to comment
        // axios.get('https://jsonplaceholder.typicode.com/todos/')
        // .then(res => setData(res.data))
        // .catch(err => console.log(err))

        

        return () => {
            console.log('unmount')
        }
    }, [dispatch]) 
    return (
        <>
          <Header />
          <ClassComponent />
          <ul className="todos">
          <h6>Here we get the JSON Response</h6>
              {
                  state.todos.length
                  ? state.todos.map(obj => <li key={obj.id}>{obj.title} 
                    <button onClick={() => removeTodo(obj.id)}>Remove Todo</button>
                    <button onClick={() => editTodo(obj)}>Edit Todo</button>
                  </li>) 
                  : <li>No Result To Display</li>
              }
          </ul>
          
          <button onClick={addTodo}>Add Todo</button>
          

        </>
    );
}


export default Home;