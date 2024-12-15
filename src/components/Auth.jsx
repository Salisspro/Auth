import { useState } from "react"



function Auth() {

   const [cancel, setCancel] = useState(true)
   // const [color, setColor] = useState()

   const handleCancel = () => {
      setCancel(false)
      // setColor(color)

   }


   const [form, setForm] = useState({
      userName: '',
      userEmail: '',
      password: "",

   })
   console.log(form)

   const handleAuth = (e) => {
      setForm(e.target.value)
   }

   const handleClick = () => {
      setForm({

      })
   }

   return (
      <div className="group bg-gray-900 p-5 rounded-lg transition-all hover:bg-slate-600 duration-1000">



         <div>
            {cancel && <div>
               <div className="text-5xl myDiv">
                  <p onClick={handleCancel}>+</p>
               </div>

               <h1 className="text-4xl text-red-50 m-2">userData</h1>
               <input onChange={handleAuth} type="text" name="" id="" placeholder="userName" />

               <input onChange={handleAuth} type="email" name="" id="" placeholder="userEmail" />

               <input onChange={handleAuth} type="password" name="" id="" placeholder="userPassword" />

               <button onClick={handleClick} className="bg-blue-700 p-3 w-[320px] rounded-lg text-slate-100 group-hover:bg-blue-600 hover:text-orange-300">submit</button>


            </div>}
         </div>

      </div>
   )
}

export default Auth