import React from 'react'
import Logopng from './assets/logo-xl.png'
import facebook from './assets/facebook.png'
import instragam from './assets/instagram.png'
import twitter from './assets/twitter.png'

function Lastfooter() {
  return (
    <div className='bg-green-900 text-white text-center items-center justify-center py-10 space-y-4'>
      
        <img className='mx-auto' src={Logopng} alt="" />
        <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
       <h4 className='font-semibold'>Social Links</h4>
       <div className='flex gap-3 justify-center mt-3'>
        <img src={facebook} alt="" />
        <img src={instragam} alt="" />
        <img src={twitter} alt="" />
       </div>
       <div className=' flex justify-between w-10/12 mx-auto pt-3  border-t-2'>
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className='flex gap-5'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
       </div>
    </div>
  )
}

export default Lastfooter