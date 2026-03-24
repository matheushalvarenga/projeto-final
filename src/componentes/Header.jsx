import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header(){
    const [tema, setTema] = useState("light")
    useEffect(()=> {
        document.body.setAttribute("data-bs-theme",tema)
    },[tema])
    function alternarTema(){
        setTema(tema === "light"? "dark": "light")
    }
    return(
        <header className="text-white p-3" style={{background:"#0d6efd"}}>
            <div className="container position-relative text-center text-center text-white">
                <button onClick={alternarTema} className="btn btn-outline-light position-absolute top-50 end-0 translate-middle-y">
                    {tema === "light" ? "🌞" :  "🌚"}
                </button>
                <Link to="/" style={{textDecoration:"none", color:"white"}}>
                <h3 className="fw-bold mb-1">Minha Lojinha</h3>
                </Link>
            </div>
        </header>
    )
}
export default Header