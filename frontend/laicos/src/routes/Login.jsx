import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleFormSubmit =  (e) =>{
        e.preventDefault()
        

         axios.post('http://localhost:3001/api/users/login', {username, password})
               
        .then((response) =>
            console.log("Result: ", response.data),
            navigate('/myprofile')
        )
        .catch((error) =>
            console.log(error.message)
        )

    }

  return (
    <div className='w-full  h-screen  pt-12'>
        <div className='w-full bg-[#A0BCC2] md:w-1/4 md:h-3/4  md:mx-auto rounded-md'>
            <form  onSubmit={handleFormSubmit} className='login-form md:flex md:flex-col md:h-full md:justify-evenly
                p-3 bg-[#A0BCC2] '>
                <input 
                    type='text' 
                    value={username}
                    onChange={handleUsername}
                    className='w-ful rounded-md p-2 focus:outline-0 focus:shadow
                    focus:shadow-[#F9EBC8]' 
                    placeholder='Username'
                />
                <input 
                    type='password' 
                    value={password}  
                    onChange={handlePassword}
                    className='w-ful rounded-md p-2 focus:outline-0 focus:shadow 
                    focus:shadow-[#F9EBC8]' 
                    placeholder='Password'/>
                <button type='submit' className='submit-btn bg-[#F9EBC8] md:2 p-2 rounded-lg 
                    mx-uto text-slate-400 tracking-wider  hover:shadow hover:shadow-[#F9EBC8] hover:transition-all'>Login
                </button>
                <a href='/' className='text-center text-[#F9EBC8]'>Forgotten password?</a>
            </form>
            <div className='link-to-signup md:mt-7 md:w-full md:mx-auto text-center'>
                <p className='text-[#A0BCC2] md:my-3'>Don't have an account</p>
                <a href='/signup' className='text-center md:w-1/4 rounded-lg px-4 py-2 
                    md:mt-2 text-[#F9EBC8] bg-[#A0BCC2]'>create account</a>

            </div>
        </div>
    </div>
  )
}

export default Login