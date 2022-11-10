import {useState} from 'react'
import axios from 'axios'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password1, setPassword1] = useState('')
    //const [password2, setPassword2] = useState('')

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handleUserName = (e) =>{
        setUserName(e.target.value)
    }

    const handlePassword1 = (e) =>{
        setPassword1(e.target.value)
    }

    // const handlePassword2 = (e) =>{
    //     setPassword2(e.target.value)
    // }

    //on form submit
    const onFormSubmit = async (e) =>{
        e.preventDefault()
        const res = await axios.post('http://localhost:3001/api/users/signup', {email, username})
        // const data = res.json()
        console.log(res)
        // .then((res) => {console.log(res)})
    }
    
  return (
     <div className='w-full  h-screen  pt-12'>
        <form onSubmit={onFormSubmit} className='login-form md:flex md:flex-col md:justify-evenly md:w-1/4 md:h-3/4  md:mx-auto rounded-md
            p-3 bg-[#A0BCC2] '>
            <input 
                type='text'
                placeholder='Email address'
                value={email}
                onChange={handleEmail}
                className='w-ful rounded-md p-2 focus:outline-0 focus:shadow
                 focus:shadow-[#F9EBC8]' 
            />

            <input 
                type='username'
                placeholder='Username'
                value={username}
                onChange={handleUserName}
                className='w-ful rounded-md p-2 focus:outline-0 focus:shadow 
                focus:shadow-[#F9EBC8]' 
            />

            <input 
                type='password'
                placeholder='Password'
                value={password1}
                onChange={handlePassword1}
                className='w-ful rounded-md p-2 focus:outline-0 focus:shadow 
                focus:shadow-[#F9EBC8]' 
            />

            {/* <input 
                type='password'
                placeholder='Confirm Password'
                value={password2}
                onChange={handlePassword2}
                className='w-ful rounded-md p-2 focus:outline-0 focus:shadow 
                focus:shadow-[#F9EBC8]' 
            />
             */}
            <button type='submit' className='submit-btn bg-[#F9EBC8] md:2 p-2 rounded-lg 
                mx-uto text-slate-400 tracking-wider  hover:shadow hover:shadow-[#F9EBC8] 
                hover:transition-all'>Sign Up
            </button>
            <a href='/' className='text-center text-[#F9EBC8]'>Forgotten password?</a>
        </form>
       
    </div>
  )
}

export default Signup