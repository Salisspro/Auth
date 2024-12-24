import './App.css'
import AddFiles from './components/AddFiles'
import Home from './components/Home'
import Practice from './components/Practice'
import Auth from './Auth/Auth'
import FireStore from './Auth/FireStore'
// import Auths from './components/Auths'

function App() {

  return (
    <>
      <div className='bg-blue-900 p-1 hover:shadow-[0_1px_10px_white] hover:bg-blue-800 duration-1000 ease-in-out'>
        <Home />
      </div>
      <div className=' sm:bg-slate-900  max-w-[1500px]  max-auto flex items-center justify-center flex-wrap p-10'>
        <Practice />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center'>

          <AddFiles />
          <Auth />
        </div>
        <div className='w-full'>

      <FireStore />
        </div>
      </div>
      {/* <Auths /> */}
    </>
  )
}

export default App
