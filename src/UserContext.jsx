import React, { createContext, useState } from 'react'

import { toast } from 'react-toastify';


export const UserContext = createContext()

function UserContextProvider ({children}) {
    const [Call , setCall ] = useState([]);
        const [Text , setText ] = useState([]);
        const [Vedio , setVedio ] = useState([]);
    
    const callHandle = (data) => {
      const Exist = Call.find(Data => Data.id === data.id);
      if(!Exist){
        setCall([...Call , data]);
        toast("This Person Added To The Call List !")
      }else{
        toast.warning("This Person Already Exist In The Call List !")
    
      }
    }
    const TextHandle = (data) => {
      const Exist = Text.find(Data => Data.id === data.id);
      if(!Exist){
        setText([...Text , data]);
        toast("This Person Added To The Text List !")
      }else{
        toast.warning("This Person Already Exist In The Text List !")
    
      }
    }
    const VedioHandle = (data) => {
      const Exist = Vedio.find(Data => Data.id === data.id);
      if(!Exist){
        setVedio([...Vedio , data]);
        toast("This Person Added To The  Vedio List !")
      }else{
        toast.warning("This Person Already Exist In The Vedio List !")
    
      }
    }
    
    // console.log(Call);
    // console.log(Text);
    // console.log(Vedio);
    
    
    
    
    
    

    const Userinfo = {Call , setCall , Text , setText , Vedio , setVedio , callHandle , TextHandle , VedioHandle}
  return (

    <UserContext.Provider value={Userinfo}> 
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider