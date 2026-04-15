import React, { useContext } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { UserContext } from './UserContext'
import call from './assets/call.png'
import text from './assets/text.png'
import vedio from './assets/video.png'

function  TimelinePage() {


const {Call , Text , Vedio } = useContext(UserContext)

console.log(Call , Text , Vedio)

  return (
    <div className='w-10/12 mx-auto bg-gray-100 p-5 my-10 '> 
        <h2 className='text-3xl font-bold '>TimeLine </h2>
        <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1 flex justify-between w-70 "> <span>Filter TimeLine</span> <RiArrowDropDownLine /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Call</a></li>
    <li><a>Text</a></li>
    <li><a>Vedio</a></li>
  </ul>
</div>


{/* Map For Call List Data  */}


<div className='space-y-2'>
{Call.map( (Data , index ) => (
  <div key={index} className='flex gap-5 bg-white p-4 mt-2'>
    <div>
    <img src={call} alt="" />
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

{/* Map For Text List Data */}

<div className='space-y-2'>
{Text.map( (Data , index ) => (
  <div key={index} className='flex gap-5 mt-2 bg-white p-4'>
    <div>
    <img src={text} alt="" />
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


{/* Map For Vedio List Data */}

<div className='space-y-2'>
{Vedio.map( (Data , index ) => (
  <div key={index} className='flex gap-5 mt-2 bg-white p-4'>
    <div>
    <img src={vedio} alt="" />
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




    </div>
  )
}

export default  TimelinePage