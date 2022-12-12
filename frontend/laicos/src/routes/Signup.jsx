import {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword1] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handleUserName = (e) =>{
        setUserName(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword1(e.target.value)
    }

    // const handlePassword2 = (e) =>{
    //     setPassword2(e.target.value)
    // }

    //on form submit
    const onFormSubmit = async (e) =>{
        e.preventDefault()
        if(email && username && password){
            await axios.post('http://localhost:3001/api/users/register', {email, username, password})
            .then(result => console.log(result.data),
                setIsSubmitted(true),
                setError(false),
                resetForm(),
                navigate('/login')
            )
            .catch(err => console.log(err))
            
            // .then((res) => {console.log(res)})

        }
        else{
            setError(true)
            setIsSubmitted(true)
        }
        
    }

    const resetForm = () =>{
        setEmail('')
        setUserName('')
        setPassword1('')
    } 
    
  return (
     <div className='w-full  h-screen  pt-12'>
        <form onSubmit={onFormSubmit} className='login-form md:flex md:flex-col md:justify-evenly md:w-1/4 md:h-3/4  md:mx-auto rounded-md
            p-3 bg-light-purple'>

            {error && 
                <div  className='w-ful rounded-md p-2 focus:outline-0 border-2 border-red-700
                 focus:shadow-[red] text-[#F9EBC8]'>Please fill in all the fields</div>
            }

            {isSubmitted && 
                <div  className='w-ful rounded-md p-2 focus:outline-0 border-2 border-[#F9EBC8]
                    bg-[#F9EBC8] text-slate-400 '>Account created successfully</div>
            }
            <input 
                type='text'
                placeholder='Email address'
                value={email}
                onChange={handleEmail}
                className='w-ful rounded-md p-2 text-slate-400 focus:outline-0 focus:shadow
                 focus:shadow-[#F9EBC8]' 
            />

            <input 
                type='text'
                placeholder='Username'
                value={username}
                onChange={handleUserName}
                className='w-ful rounded-md p-2 text-slate-400 focus:outline-0 focus:shadow 
                focus:shadow-[#F9EBC8]' 
            />

            <input 
                type='password'
                placeholder='Password'
                value={password}
                onChange={handlePassword}
                className='w-ful rounded-md p-2 text-slate-400 focus:outline-0 focus:shadow 
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
            <button type='submit' className='submit-btn bg-purple md:2 p-2 rounded-lg 
                mx-uto text-light-purple tracking-wider  hover:shadow hover:shadow-purple 
                hover:transition-all'>Sign Up
            </button>

            <div className='link-to-signup md:mt-4 md:w-full md:mx-auto text-center'>
                <p className='text-purple md:my-3'>Already have an account? </p>
                <a href='/signup' className='text-center md:w-1/4 rounded-lg px-4 
                    py-2 md:mt-2 text-light-purple bg--purple'>Login</a>

            </div>
        </form>
       
    </div>
  )
}

export default Signup