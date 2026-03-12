import { useEffect, useState } from "react";
import ProdutosCard from "../componentes/ProdutosCard";

function Home(){
    const [produtos, setProdutos] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProdutos(data));
    },[]);

    return (
        <div className="container mt-4">
            <div className="row">
            <p>oi</p>
                {produtos.map(produto => (
                    <ProdutosCard
                        key={produto.id}
                        produto={produto}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;