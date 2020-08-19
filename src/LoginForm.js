import React,{useState} from 'react'
import Header from './Header';

const LoginForm = () => {
    const [userName,setUserName]= useState('')
    const [password,setPassword]= useState('')
    const onSubmitHandler=(event)=>{ 
       console.log(event) 
       event.preventDefault()
        if(userName!== '' && password!== ''){
           alert('User logged in successfully!') 
        } 
        else {
           alert('Invalid username and password')
        }
    
    }
    const onChangeUserName = (event)=> {
        console.log('username', event.target.value) 
        setUserName(event.target.value)
    }

    const onChangePassword = (event)=> {
        console.log('password', event.target.value)
        setPassword(event.target.value)
    }


    return (
        <>
        <Header />
        <div>
            <form onSubmit={onSubmitHandler} className='Form' >
                <input type= "text" placeholder="username" value={userName} onChange={ onChangeUserName } className='UserName'/>
                <input type= "password" placeholder="password" value={password} onChange={onChangePassword} className='Password'/>
                <button className='Submit'>Login</button>
            </form>
        </div>
        </>
    )
}

export default LoginForm

