import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";


function Header(){
    const [tema, setTema] = useState("light")
    const {carrinho} = useContext(CarrinhoContext);
    console.log(carrinho);
    useEffect(()=> {
        document.body.setAttribute("data-bs-theme",tema)
    },[tema])
    function alternarTema(){
        setTema(tema === "light"? "dark": "light")
    }
    const totalItens = carrinho.reduce((acc,p) => {
        return acc + p.quantidade;
    },0);
    return(
        <header className="p-3" style={{background:"#0d6efd"}}>
            <div className="container d-flex align-items-center justify-content-between text-white">
                <button onClick={alternarTema} className="btn btn-outline-light">
                    {tema === "light" ? "🌚" :  "🌞"}
                </button>
                <Link to="/" style={{textDecoration:"none", color:"white"}}>
                <h3 className="fw-bold mb-0 text-center">Minha Lojinha</h3>
                </Link>
                <Link to="/carrinho" style={{textDecoration:"none"}} className="position-relative">
                    <span className="position-relative" style={{fontSize:"30px"}}>
                        🛍️
                    </span>
                    {totalItens > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge bg-danger" style={{fontSize:"12px"}}>{totalItens}</span>
                    )}
                </Link>
            </div>
        </header>
    )
}
export default Header