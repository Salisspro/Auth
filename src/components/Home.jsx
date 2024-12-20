
import IMG from '../img/Male Programmer PNG Transparent Images Free Download  Vector Fil.png'
function Home() {
   return (
      <div className='group  mt-5 flex items-center justify-around gap-60 lg:gap-x-[60rem]'>
         
         <img
            className='w-[80px] rounded-[100px] bg-white p-1 m-1 animate-pulse shadow-[0_0_10px] delay-300 duration-300' src={IMG} alt="" />

         <div className='bg-blue-700 p-3 rounded-lg text-slate-100 w-[100px] hover:shadow-[0_0_10px_white] duration-1000 ease-out group shadow-[0_0_10px]'>
            <h1 className='group-hover:text-slate-950 group-hover:bg-slate-200 group-hover:p-2 duration-1000 ease-in-out '>SALISSPRO</h1>
         </div>
      </div>
   )
}

export default Home