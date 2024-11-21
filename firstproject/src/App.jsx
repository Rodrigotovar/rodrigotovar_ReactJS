import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import {BrowerRouter, Routes, Route} from 'react-router-dom'
function App() {


  return (
    <>
    <BrowerRouter>
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category" element={<ItemListContainer />} />
        <Route path="/detail" element={<ItemListContainer />} />
        <Route path="*" element={<h1>404</h1>} />

      </Routes>
      <ItemListContainer greeting="Bienvenido a tienda"/>
      </BrowerRouter>
    </>
  )
}

export default App
