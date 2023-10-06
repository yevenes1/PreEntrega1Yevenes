import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartProvider from "./context/CartProvider";


function App() {

  return (
    <CartProvider>
      <NavBar />

    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
  </CartProvider>
  
        
  )
}

export default App
