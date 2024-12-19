import {
   BrowserRouter as Router, Routes,
   Route,
   Link
} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Help from '../pages/Help'
import Contact from '../pages/Contact'
import { useState } from 'react'


function NavBar() {
   const [modal, setModal] = useState(true)

   const handleClick = () => {
      setModal(!modal)
   }

   return (


      <div>

         <button className='btn' onClick={handleClick}>+</button>

         <p>{modal && <div className=''>

            <Router>
               <div className='nav'>

               <Link to='Home'>Home</Link>
               <Link to='About'>About</Link>
               <Link to='Help'>Help</Link>
               <Link to='Contact'>Contact</Link>

               </div>
               <Routes >
                  <Route path='/Home' element={<Home />} />
                  <Route path='/About' element={<About />} />
                  <Route path="/Help" element={<Help />} />
                  <Route path='/Contact' element={<Contact />} />
               </Routes>
            </Router>
         </div>}</p>

      </div>

   )
}

export default NavBar