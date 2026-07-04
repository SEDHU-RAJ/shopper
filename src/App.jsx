import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import ShopCategory from './Pages/ShopCategory'
import Cart_page from './Pages/Cart_page'
import Login_page from "./pages/Login_page";
import Footer from './Components/Footer'
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
    <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
    <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
    <Route path='/product/:productID' element={<Product/>}/>
    <Route path='/cart' element={<Cart_page/>}/>
    <Route path='/login' element ={<Login_page/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
