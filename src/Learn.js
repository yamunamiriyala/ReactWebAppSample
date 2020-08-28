import React, {useEffect, useContext} from 'react';
import Header from './Header';
import axios from 'axios';
import {Context} from './store';

const Learn = () => {
    const [state, dispatch] = useContext(Context)
    console.log('state', state)
    useEffect(() => {
        const fecthData = async () => {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts/',{
                title: 'yami',
                body: 'react',
                userId: 1
            })
            console.log('response', response)
        
        }
        fecthData();
        
    }, []) 
    return(
        <>
        <Header />
        <div className="Learn">
            <h1> Lessons for everyone </h1>
        </div>
        </>
    )

}

export default Learn