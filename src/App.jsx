import './App.css'
import AddFiles from './components/AddFiles'
import Cart from './Cart'

import Header from './components/Header'

import Home from './components/Home'
import Practice from './components/Practice'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='bg-blue-900 p-1 hover:shadow-[0_1px_10px_white] hover:bg-blue-800 duration-1000 ease-in-out'>
        <Home />
      </div>
      <div className=' sm:bg-slate-900  max-w-[1500px]  max-auto flex items-center justify-center flex-wrap p-10'>
        <Practice />
        {/* <NavBar /> */}
        <Cart />

        <AddFiles />
        {/* <AddProject /> */}
        <Header />
        {/* <Project /> */}
        <Footer/>
      </div>
    </>
  )
}

export default App
