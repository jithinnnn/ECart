import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/view/:id' element={<View></View>}></Route>
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
