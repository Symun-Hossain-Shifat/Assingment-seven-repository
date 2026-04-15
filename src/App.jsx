
import { NavLink, Outlet, useNavigation } from 'react-router'
import './App.css'
import { IoHomeOutline } from 'react-icons/io5'
import { RiTimeLine } from 'react-icons/ri'
import { TfiStatsUp } from 'react-icons/tfi'
import Lastfooter from './Lastfooter'
import logo from './assets/logo.png'



function App() {
  const Navigation  = useNavigation();
    

  return (
    <>
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'> <span><IoHomeOutline /></span>Home</NavLink></li>
      <li><NavLink to='/timelinegpage'><span><RiTimeLine /></span>TimeLine</NavLink></li>
      <li><NavLink to='/statspage'><span><TfiStatsUp /></span>Stats</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
  </div>
  <div className="navbar-end hidden mx-10 lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><NavLink to='/'> <span><IoHomeOutline /></span>Home</NavLink></li>
      <li><NavLink to='/timelinegpage'><span><RiTimeLine /></span>TimeLine</NavLink></li>
      <li><NavLink to='/statspage'><span><TfiStatsUp /></span>Stats</NavLink></li>
    </ul>
  </div>
  
</div>
{
  Navigation.state === 'loading'?(
    <div>
      
      <span className="loading loading-spinner loading-xl"></span>
      <span className="loading loading-spinner loading-lg"></span>
      <span className="loading loading-spinner loading-md"></span>

    </div>
  ):(
    
    <Outlet></Outlet>
  )
}

<Lastfooter></Lastfooter>


    </>
    
  )
}

export default App
