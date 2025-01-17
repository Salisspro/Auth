import { useState } from "react"


const price = 10
// const error = ''
export default function Cart() {
   const [carts, setCarts] = useState(0)
   const [err, setErr] = useState('')

   let totalPrice = carts * price;

   const handleCart = () => {
      setCarts(prev => prev + 1)
      setErr('')
   }

   const reset = () => {
      setCarts(0)
      setErr('')

   }

   const minux = () => {
      setCarts(carts - 1)
      if (carts === 0) {
         setCarts(0)
         setErr('You have to select something')

      }
   }

   console.log(carts);

   return (
      <div className="rounded-lg text-black md:w-[400px]">
         <div className="bg-s-300 p-5">

            <div className="box p-5">
               <p className="para">{totalPrice}</p>
            </div>
            <p className="text-red-600 animate-pulse duration-1000 ease-in-out">{err}</p>
            <div className="div">
               <button className="bg-black p-2 m-10 rounded-lg text-slate-200 w-[150px]
         " onClick={handleCart}>Add Cart</button>
               <button className="bg-slate-100 w-[70px] p-3 rounded" onClick={minux}> -10</button>
               <button onClick={reset} className="w-[70px] bg-red-500 p-2 m-10 rounded-lg text-slate-200">reset</button>
            </div>
         </div>

      </div>
   )
}
