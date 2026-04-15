import React from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { NavLink } from 'react-router'

function Notfound() {
  return (
    <div className='text-center flex flex-col space-y-3 h-screen justify-center items-center border w-10/12 mx-auto  my-auto'>
        
        <h6 className='font-extrabold text-4xl text-green-900'>This Page Is UnAvailable For <br /> This Moment</h6>
        <p className='font-semibold text-2xl'>Please Enter Valid Url</p>
        <NavLink to='/'>
             <button className='btn btn-success btn-outline text-bold text-black'> <span><IoArrowBack /></span > Back Home </button>

        </NavLink>
       
    </div>
  )
}

export default Notfound