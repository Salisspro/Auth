import { useState } from "react"
import { Project } from "../../config/Project"
function AddProject() {
   
   const [add, setAdd] = useState(true)
   const handleAdd = function () {
      setAdd(!add)

   }
   return (
      <div className="border rounded-lg w-[400px] h-[160px]  grid items-center group  duration-1000 ease-in-out transition-all p-3 m-5 hover:shadow-[0_0_10px_red] delay-300 group">
         <div>
            <p
               onClick={handleAdd}
               className="text-6xl group-hover:animate-pulse">+</p>
            <p className="text-2xl"> {add ? <span>Add project</span> : <di className='text-sm'>
               <Project/>
               </di>}</p>
         </div>

         <div>
            <p className="group-hover:border p-5 rounded-lg  duration-1000 transition-all ease-in-out group-hover:mt-[10px]">demo project</p>
         </div>

      </div>
   )
}

export default AddProject