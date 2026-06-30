import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import ShopCategory from './Pages/ShopCategory'
import Cart_page from './Pages/Cart_page'
import Login_page from "./pages/Login_page";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/mens' element={<ShopCategory category="mens"/>}/>
    <Route path='/womens' element={<ShopCategory category="womens"/>}/>
    <Route path='/kids' element={<ShopCategory category="kids"/>}/>
    <Route path=':ProductId' element={<Product/>}/>
    <Route path='/cart' element={<Cart_page/>}/>
    <Route path='/login' element ={<Login_page/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
