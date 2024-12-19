import { useState } from "react"

function Auth() {

   const [cancel, setCancel] = useState(true)

   const handleCancel = () => {
      setCancel(false)

   }


   const [form, setForm] = useState({
      userName: '',
      userEmail: '',
      password: "",

   })
   console.log(form)

   const handleAuth = (e) => {
      setForm(priv => ({
         ...priv,
         [e.target.name]: e.target.value
      }))
   }

   const handleClick = () => {
      setForm(form)
   }

   return (
      <div className="group rounded-lg transition-all hover:bg-slate-950 duration-1000 shadow-[0_0_10px] p-5 m-5">

         <div>
            {cancel && <div>
               <div className="text-5xl myDiv">
                  <p onClick={handleCancel}>+</p>
               </div>

               <h1 className="text-4xl text-red-50 m-2">userData</h1>
               <input onChange={handleAuth} type="text" name="userName" placeholder="userName" />

               <input onChange={handleAuth} type="email" name="userEmail" placeholder="userEmail" />

               <input onChange={handleAuth} type="password" name="userPassword" placeholder="userPassword" />

               <button onClick={handleClick} className="bg-blue-700 p-3 w-[320px] rounded-lg text-slate-100 group-hover:bg-blue-600 hover:text-orange-300">submit</button>

            </div>}
         </div>

      </div>
   )
}

export default Auth