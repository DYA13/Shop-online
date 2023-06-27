import './App.css'
import Oggetti from './Components/OggettiComponents/Oggetti'
import AllCategories from './Components/Filter/AllCategories'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/HeaderContent'
import Navbar from './Components/Header/Navbar'

function App() {
  return (
    <div>
      <header>
        <nav className='header_content'>
          <Header />
          <Navbar />
        </nav>
      </header>

      <div className='aside'>
        <AllCategories />
        <Cart />
      </div>

      <section>
        <div className='oggetti_container'>
          <Oggetti />
        </div>
      </section>
    </div>
  )
}

export default App
