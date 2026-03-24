import Header from "./componentes/Header";
import './App.css';
import Home from"./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produto from "./pages/Produto";

function App(){
  return(
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id"element= {<Produto/>}/>
      </Routes>
    </div>
  );
}

export default App;
