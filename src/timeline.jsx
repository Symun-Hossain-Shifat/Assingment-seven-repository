import React, { useContext, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { UserContext } from './UserContext'
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';
import { FaPhotoVideo } from 'react-icons/fa';


function  TimelinePage() {


const {Call , Text , Vedio } = useContext(UserContext)

// console.log(Call , Text , Vedio)


 


const [filterData , setFilterData ] = useState('All');






return (
    <div className='w-10/12 mx-auto bg-gray-100 p-5 my-10 '> 
        <h2 className='text-3xl font-bold '>TimeLine </h2>
        <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1 flex justify-between w-70 "> <span>Filter TimeLine</span> <RiArrowDropDownLine /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={() => setFilterData('All')}><a>All</a></li>
    <li onClick={() => setFilterData('Call')}><a>Call</a></li>
    <li onClick={() => setFilterData('Text')}><a>Text</a></li>
    <li onClick={() => setFilterData('Vedio')}><a>Vedio</a></li>
  </ul>
</div>


{/* Map For Call List Data  */}

{( filterData === "All" || filterData  === 'Call') && (
<div className='space-y-2'>
{Call.map( (Data , index ) => (
  <div key={index} className='flex gap-5 items-center bg-white p-4 mt-2'>
    <div>
    <span><IoCallOutline size={40} /></span>
    </div>
    <div>
<h2 className='font-bold text-2xl items-end  text-black flex gap-3'>Call <span > <p className='text-gray-600 
text-[15px] font-semibold'> With {Data.name}</p></span></h2>
<p className='text-gray-600 
text-[15px] font-semibold'> Date : {Data.Date}  Time : {Data.Time} </p>
    </div>
  </div>
))}
</div>
)}


{/* Map For Text List Data */}
{( filterData === "All" || filterData === 'Text') && (
<div className='space-y-2'>
{Text.map( (Data , index ) => (
  <div key={index} className='flex items-center gap-5 mt-2 bg-white p-4'>
    <div>
    <span><MdOutlineTextsms size={40} /></span>
    </div>
    <div>
<h2 className='font-bold text-2xl items-end  text-black flex gap-3'>Text <span > <p className='text-gray-600 
text-[15px] font-semibold'> With {Data.name}</p></span></h2>
<p className='text-gray-600 
text-[15px] font-semibold'> Date : {Data.Date}  Time : {Data.Time} </p>
    </div>
  </div>
))}
</div>
)}



{/* Map For Vedio List Data */}

{( filterData === "All" || filterData === 'Vedio') && (
<div className='space-y-2'>
{Vedio.map( (Data , index ) => (
  <div key={index} className='flex items-center gap-5 mt-2 bg-white p-4'>
    <div>
    <span><FaPhotoVideo size={40} /></span>
    </div>
    <div>
<h2 className='font-bold text-2xl items-end  text-black flex gap-3'>Vedio <span > <p className='text-gray-600 
text-[15px] font-semibold'> With {Data.name}</p></span></h2>
<p className='text-gray-600 
text-[15px] font-semibold'> Date : {Data.Date}  Time : {Data.Time} </p>
    </div>
  </div>
))}
</div>

)}




    </div>
  )
}

export default  TimelinePage