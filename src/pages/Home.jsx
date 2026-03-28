import { useEffect, useState } from "react";
import ProdutosCard from "../componentes/ProdutosCard";

function Home(){
    const [produtos, setProdutos] = useState([]);
    const [categorias, setCategorias]= useState([])
    const [categoriasSelecionada, setCategoriaSelecionada] = useState("")
    const [loading, setLoading] = useState(true);
    const [erro, setErro ] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then(res => {
                if(!res.ok){
                    throw new Error("Erro ao buscar produtos");
                }
                return res.json();
            })
            .then(data => setProdutos(data))
            .catch(err => setErro(err.massage))
            .finally(()=> setLoading(false));
    },[]);
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
    if(loading){
        return <h3 className="text-center mt-5">Carregando Produtos....</h3>
    }
    if(erro){
        return <h3 className="text-center mt-5 text-danger">{erro}</h3>
    }

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