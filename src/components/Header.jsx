import { useCallback, useState } from "react"
import Auth from "./Auth"
function Header() {

   const [modal, setModal] = useState(true)
   const [auth, setAuth] = useState(false)

   const handleModal = useCallback(() => {

      setModal(!modal)
   }, [modal])

   const handleClose = () => {
      setModal(modal)
      setAuth(false)

   }

   const handleNext = () => {
      setAuth(true)

   }

   return (
      <div className="group border rounded-md p-[30px] text-slate-200 mt-5 transition-all hover:text-slate-400 duration-1000 ease-in-out m-5">
         <div onClick={handleModal}>{modal ? <button className="text-4xl">Yeaa</button> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae. Illo excepturi ut iusto aut, illum debitis, similique earum neque harum nihil tempore, quo voluptates natus ullam vitae fugit consequuntur.

            <span className="ml-3 text-red-600 close mt-[20px]" onClick={handleClose}>CLOSE</span>

         </p>}
            <span className="mt-[30px]" onClick={handleNext}>OPEN NEXT</span>
            <div>
               <p>{auth && <Auth />}</p>
            </div>
         </div>
      </div>
   )
}

export default Header