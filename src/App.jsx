import './App.css'
import Cart from './Cart'
import Header from './components/Header'

function App() {

  return (
    <div className=' p-1  sm:grid-cols-2'>
      <Cart />
      <Header />
    </div>
  )
}

export default App
