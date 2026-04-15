import React, { useContext } from 'react'
import { FiArchive } from 'react-icons/fi';
import call from './assets/call.png'
import text from './assets/text.png'
import vedio from './assets/video.png'
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router'
import { UserContext } from './UserContext';


function Dynamicpage() {

 const { callHandle , TextHandle , VedioHandle } = useContext(UserContext)
   
    const {id} = useParams()
    // console.log(id)
    const Datas = useLoaderData();
    
    const Data = Datas.find( Data => Data.id === Number(id));
    // console.log(Data)

    

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-5 my-5 w-10/12 mx-auto bg-gray-100'>
        <div className='col-span-1  space-y-3'>
            <div key={Data.id} to={`/Dynamicpage/${Data.id}`} className="card bg-base-100  shadow-sm rounded-b-md">
  <figure className="px-10 pt-10">
    <img
      src={Data.picture}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{Data.name}</h2>
    
    <div className='flex gap-2 '>
        {Data.tags.map( (tag ,index) => (
            <div key={index} className="badge badge-soft badge-accent items-center text-center">{tag}</div>
        ))}
    </div>
    <div className={`badge ${Data.status === 'Almost Due'?'badge-warning':Data.status === 'on-track'?'badge-primary':'badge-error'}`}>{Data.status}</div>
    <p>{Data.bio}</p>
  </div>
          </div>
          <div className='flex gap-3 items-center bg-white py-3 justify-center'> <span><MdOutlineNotificationsActive /></span> <p className='font-semibold'>Snooz 2 weeks</p></div>
          <div className='flex gap-3 items-center bg-white py-3 justify-center'> <span><FiArchive /></span> <p className='font-semibold'>Archive</p></div>
          <div className='flex gap-3 items-center bg-white py-3 text-red-600 justify-center'> <span><RiDeleteBin6Line /></span> <p className='font-semibold'>Delete</p></div>
          
        </div>
        <div className='col-span-3  space-y-3'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className=' items-center text-center py-8 rounded-2xl bg-white'>
                  <h2 className='font-bold text-2xl text-green-400'>{Data.days_since_contact}</h2>
                  <p className='font-semibold text-gray-600'>Days Since Contact</p>
                </div>
                <div className='items-center text-center py-8 rounded-2xl bg-white'>
                  <h2 className='font-bold text-2xl text-green-400'>{Data.goal}</h2>
                  <p className='font-semibold text-gray-600'>Goals (Days)</p>
                </div>
                <div className='items-center text-center py-8 rounded-2xl bg-white'>
                  <h2 className='font-bold text-2xl text-green-400'>{Data.next_due_date}</h2>
                  <p className='font-semibold text-gray-600'>Next Due</p>
                </div>
               
            </div>
            <div className=' bg-white rounded-2xl p-4'>
              <div className='flex justify-between items-center'>
                <h2 className='font-bold text-1xl'>RelationShip Goal</h2>
                <button className='btn'>Edit</button>
              </div>
              <p className='text-gray-600 font-semibold'>Connect every <span className='font-bold text-black'> {Data.goal} Days</span></p>
            </div>
            <div className=' bg-white rounded-2xl p-4 space-y-3'>
              <h2  className='font-bold text-1xl'>Quick Check In</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div onClick={() => {callHandle(Data)}}  className=' cursor-pointer bg-gray-100 py-3 rounded-2xl items-center text-center'>
                  <img className='mx-auto w-[5]' src={call} alt="" />
                  <h3 className='font-bold text-2xl'>Call</h3>
                </div>
                <div onClick={() => {TextHandle(Data)}}  className=' cursor-pointer bg-gray-100 py-3 rounded-2xl items-center text-center'>
                  <img className='mx-auto w-[5]' src={text} alt="" />
                  <h3 className='font-bold text-2xl'>Text</h3>
                </div>
                <div onClick={() => {VedioHandle(Data)}}  className=' cursor-pointer bg-gray-100 py-3 rounded-2xl items-center text-center'>
                  <img className='mx-auto w-[5]' src={vedio} alt="" />
                  <h3 className='font-bold text-2xl'>Vedio</h3>
                </div>
                
              </div>
            </div>
        </div>
       
    </div>
  )
}

export default Dynamicpage