import { useState } from "react"


function AddFiles() {
   const [addFile, setAddFile] = useState(null)
   const [saveFile, setSaveFile] = useState(true)

   const handleFile = () => {
      if (addFile) {
         setAddFile(addFile)
         setSaveFile(!saveFile)

         alert(` You files saved in the cloud`)
      } else {
         alert("please add a file ")
      }

   }


   return (
      <div className="mt-10 border p-[30px] hover:shadow-[0_0_10px_grey] delay-100 duration-1000 transition-all rounded-lg group shadow-[0_0_10px]">

         {addFile ? <p>Files Added</p> : <p>No files add</p>}


         <p>{saveFile ? "" : "Your file saved..."}</p> <></>
         <input className="bg-slate-600" onChange={(event) => setAddFile(event.target.files)} type="file" name="" id="" />

         <button className="bg-blue-800 p-4 rounded-lg " onClick={handleFile}>save file
         </button>
         <i className="fa-solid fa-arrow-right text-3xl text-slate-100"></i>
      </div>
   )
}

export default AddFiles