import React from 'react'

const Login = () => {
  return (
    <div className='w-full bg-[#A0BCC2] md:w-1/4 md:h-3/4  md:mx-auto rounded-md'>
        <form className='login-form md:flex md:flex-col md:h-full md:justify-evenly
            p-3 bg-[#A0BCC2] '>
            <input type='text' className='w-ful rounded-md p-2 focus:outline-0 focus:shadow
                 focus:shadow-[#F9EBC8]' placeholder='Email address'/>
            <input type='password' className='w-ful rounded-md p-2 focus:outline-0 focus:shadow 
                focus:shadow-[#F9EBC8]' placeholder='Password'/>
            <button type='submit' className='submit-btn bg-[#F9EBC8] md:2 p-2 rounded-lg 
                mx-uto text-slate-400 tracking-wider  hover:shadow hover:shadow-[#F9EBC8] hover:transition-all'>Login
            </button>
            <a href='/' className='text-center text-[#F9EBC8]'>Forgotten password?</a>
        </form>
        <div className='link-to-signup md:mt-7 md:w-full md:mx-auto text-center'>
            <p className='text-[#A0BCC2] md:my-3'>Don't have an account</p>
            <a href='/' className='text-center md:w-1/4 rounded-lg px-4 py-2 md:mt-2 text-[#F9EBC8] bg-[#A0BCC2]'>create account</a>

        </div>
    </div>
  )
}

export default Login