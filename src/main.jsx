import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './Home.jsx'
import TimelinePage from './timeline.jsx'
import StatsPage from './stats.jsx'
import Dynamicpage from './Dynamicpage.jsx'
import { ToastContainer } from 'react-toastify'
import UserContextProvider from './UserContext.jsx'

const useLoader = async () => {
 const res = await fetch('/Data.json');
 const Datas = res.json();
 return Datas;
}
 



const router  = createBrowserRouter( 

  [
    {
      path: '/',
      element:<App></App>,
      children:[
    {index: true ,loader : useLoader, element: <HomePage></HomePage>},
    {path : 'timelinegpage' , element : <TimelinePage></TimelinePage>},
    {path: 'statspage' , element : <StatsPage></StatsPage>},
    {path:'Dynamicpage/:id' , loader:useLoader, element:<Dynamicpage></Dynamicpage>}

      ]
    }
    
  ]
)
createRoot(document.getElementById('root')).render(
  
<StrictMode>
  <UserContextProvider>
  <RouterProvider router = {router}></RouterProvider>
  <ToastContainer></ToastContainer>
  </UserContextProvider>
   
  </StrictMode>,
  
  
)
