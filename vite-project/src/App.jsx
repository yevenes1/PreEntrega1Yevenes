import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
 return(
<div>
  <NavBar />

    <Routes>
    <Route path="/" element={<ItemListContainer />}></Route>
    <Route path="/category/:categoryId" element={<ItemListContainer />} />
    <Route path="/item/:id" element={<ItemDetailContainer />} />

   </Routes>

   </div>
 )
}

export default App
