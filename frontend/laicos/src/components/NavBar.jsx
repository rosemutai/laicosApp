import React from 'react'
import connect from '../images/connect.jpg'

const NavBar = () => {
  return (
    <div className='nav-menu bg-red-500 w-full grid'>
        <div className='row-start-1 row-end-7 col-start-1 col-end-7 bg-[#F0DBDB] h-screen md:relative'>
            <h2 className='logo text-xl my-3 font-bold text-center text-purple'>laicos</h2>
            <h1 className='ad-text z-50 text-purple text-5xl font-bold md:absolute md:top-1/4 md:left-22
                leading-tight'>
                Make Connections Across the Globe!</h1>
            <p className='ad-descriptions z-50 text-gray-400 text-xs font-light md:absolute md:top-2/3 md:left-22
                leading-tight w-full'>Here you get an opportunity to connect
             with other people with similar interests as you across the world.</p>
        </div>

         
        <div className="menu-links row-start-1 row-end-7 col-start-7 col-end-12 bg-[#FEFCF3] ">
            <div className='lists'>
                <ul className='flex justify-end py-5'>
                <li><a href="#card" className='text-purple mr-6 font-semibold'>Sign In</a></li>
                <li><a href="#card" className='text-purple mr-6 font-semibold'>Sign Up</a></li>
                <li><a href="#card" className='text-purple mr-16 font-semibold'>Logout</a></li>
                </ul>
            </div>
            <div className='image-form flex px-8 mt-10 ml-48 w-4/5 h-96'>
                <div className='img-section w-1/2'>
                    <img src={connect} className='opacity-40 h-full' alt="people holding hands" />
                </div>
                <div className='form section w-1/2 flex flex-col items-center justify-center bg-light-purple
                     shadow-md shadow-purpl'>
                    <button className='bg-purple w-7/12 mx-auto text-light-purple p-3
                        rounded-lg'>Sign In with Google</button>
                    <button className='bg-purple w-7/12 mx-auto text-light-purple p-3 mt-4 
                        rounded-lg'>Sign In with Instagram</button>
                </div>
            </div>

            <div className="footer px-8 mt-16 text-purple ml-48 w-4/5 ">
                <p>&#169;2022 laicos</p>
            </div>
        </div>

    </div>
  )
}

export default NavBar