import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { NavLink, useLoaderData } from 'react-router'

function HomePage() {
    const Datas  = useLoaderData();
    console.log(Datas);
    
  return (
    <div className='w-12/15 mx-auto'>
        <div className='my-20 rounded-2xl py-10 text-center justify-center items-center space-y-3'>
            <h1 className='font-bold text-3xl'>Friends to keep close in your life</h1>
            <p className='font-semibold'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                <br />relationships that matter most.</p>
            <button className='btn bg-green-900 text-white'> <span><FaPlus /></span>Add Friend</button>
        
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-5'>
            <div className='bg-gray-100 rounded-2xl py-5 text-center items-center space-y-3 '>
                <h2 className='font-bold text-2xl'>{Datas.length}</h2>
                <p>Total Freinds</p>
                </div>
            <div className='bg-gray-100 rounded-2xl py-5 text-center items-center space-y-3 '>
                  <h2 className='font-bold text-2xl'>3</h2>
                 <p>Total Freinds</p>
                </div>
            <div className='bg-gray-100 rounded-2xl py-5 text-center items-center space-y-3  '>
                <h2 className='font-bold text-2xl'>6</h2> 
                <p>Total Freinds</p>
                </div>
            <div className='bg-gray-100 rounded-2xl py-5 text-center items-center space-y-3 '>
                <h2 className='font-bold text-2xl'>14</h2>
               <p>Total Freinds</p>
                </div>
        </div>
        
        </div>
        <h1 className='font-bold text-2xl text-left'>My Friends</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 py-5'>
            
            {
                Datas.map(Data => (
                    <NavLink key={Data.id} to={`/Dynamicpage/${Data.id}`} className="card bg-base-100  shadow-sm rounded-b-md">
  <figure className="px-10 pt-10">
    <img
      src={Data.picture}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{Data.name}</h2>
    <p>{Data.email}</p>
    <div className='flex gap-2 '>
        {Data.tags.map( (tag , index) => (
            <div key={index} className="badge badge-soft badge-accent items-center text-center">{tag}</div>
        ))}
    </div>
    <div className={`badge ${Data.status === 'Almost Due'?'badge-warning':Data.status === 'on-track'?'badge-primary':'badge-error'}`}>{Data.status}</div>
  </div>
</NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default HomePage