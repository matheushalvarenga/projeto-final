import { useEffect, useState } from "react";
import ProdutosCard from "../componentes/ProdutosCard";

function Home(){
    const [produtos, setProdutos] = useState([]);
    const [categorias, setCategorias]= useState([])
    const [categoriasSelecionada, setCategoriaSelecionada] = useState("")

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProdutos(data));
    },[]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => setCategorias(data));
    },[]);

    const produtosFiltrados = categoriasSelecionada
        ? produtos.filter(p => p.category === categoriasSelecionada)
        : produtos

        return (
            <div>
                <div className="container mt-4">
                    <div className="mb-4 text-center">
                        <button 
                            className="btn btn-outline-primary me-2" 
                            onClick={() => setCategoriaSelecionada("")}
                        >
                            Todos
                        </button>
        
                        {categorias.map(cat => (
                            <button 
                                key={cat}
                                className="btn btn-outline-primary me-2"
                                onClick={() => setCategoriaSelecionada(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
        
                <div className="row">
                    {produtosFiltrados.map(produto => (
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