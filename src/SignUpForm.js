// create a signup like loginform
// it will have - 5 inputs ; and inputs are first name, lastname, username, pswd and email
// when all values are not empty - show user an alert that user is signed up successfully otherwise show alert - all fields are mandatory.
// style it as well

import React, {useState} from 'react'
import Header from './Header';

const SignUpForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [password,setPassword]= useState('')
    const [email, setEmail] = useState('')
    const onSubmitHandler=(event)=>{
        console.log(event)
        event.preventDefault()
            if(firstName!== '' && lastName!== '' && userName!== '' && password!== '' && email!== ''){
                alert('User has signed up successfully!')
            }
            else{
                alert('All fields are mandatory') 
            }
    }
    const onChangeFirstName = (event) => {
        console.log('firstName', event.target.value)
        setFirstName(event.target.value)
    }
    const onChangeLastName = (event) => {
        console.log('lastName', event.target.value)
        setLastName(event.target.value)
    }
    const onChangeUserName = (event) => {
        console.log('username', event.target.value) 
        setUserName(event.target.value)
    }
    const onChangePassword = (event)=> {
        console.log('password', event.target.value)
        setPassword(event.target.value)
    }
    const onChangeEmail = (event) => {
        console.log('email', event.target.value)
        setEmail(event.target.value)
    }

    return (
        <>
        <Header/>
        <div>
            <form onSubmit={onSubmitHandler} className='Form'>
                <input type= "text" placeholder="firstname" value={firstName} onChange={onChangeFirstName} className='FirstName' />
                <input type= "text" placeholder="lastname" value={lastName} onChange={onChangeLastName} className='LastName' />
                <input type= "text" placeholder="username" value={userName} onChange={onChangeUserName} className='UserName' />
                <input type= "password" placeholder="password" value={password} onChange={onChangePassword} className='Password' />
                <input type= "email" placeholder="email" value={email} onChange={onChangeEmail} className='Email' />
                <button className='Submit'>Sign Up</button>
            </form>
        </div>
        </>
    )
}
export default SignUpForm