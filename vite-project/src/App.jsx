import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartProvider from "./context/CartProvider";
import CheckOut from "./components/CheckOut/CheckOut"
import Cart from "./components/Cart/Cart"


function App() {

  return (
    <CartProvider>
      <NavBar />

    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  </CartProvider>
  
        
  )
}

export default App
