import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

function  TimelinePage() {
  return (
    <div className='w-10/12 mx-auto bg-gray-100 p-5 my-10 '> 
        <h2 className='text-3xl font-bold '>TimeLine </h2>
        <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1 flex justify-between w-80 "> <span>Filter TimeLine</span> <RiArrowDropDownLine /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Call</a></li>
    <li><a>Text</a></li>
    <li><a>Vedio</a></li>
  </ul>
</div>
    </div>
  )
}

export default  TimelinePage