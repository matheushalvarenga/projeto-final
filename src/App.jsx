import Header from "./componentes/Header";
import './App.css';
import Home from"./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produto from "./pages/Produto";
import Carrinho from "./pages/Carrinho";

function App(){
  return(
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id"element= {<Produto/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
      </Routes>
    </div>
  );
}

export default App;
