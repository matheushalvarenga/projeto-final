import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

function Produto(){
    const navigate = useNavigate();
    const { id } = useParams();

    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    const quantidade = carrinho.find(p => p.id === produto?.id)?.quantidade || 0;

    function adicionarAoCarrinho(produto){
        const produtoExistente = carrinho.find(p => p.id === produto.id);

        if(produtoExistente){
            const novoCarrinho = carrinho.map(p => 
                p.id === produto.id 
                    ? { ...p, quantidade: p.quantidade + 1 } 
                    : p
            );
            setCarrinho(novoCarrinho);
        } else {
            setCarrinho([
                ...carrinho,
                { ...produto, quantidade: 1 }
            ]);
        }
    }

    function aumentarQuantidade(){
        if(produto) adicionarAoCarrinho(produto);
    }

    function diminuirQuantidade(){
        const produtoExistente = carrinho.find(p => p.id === produto?.id);
        if(!produtoExistente) return;

        if(produtoExistente.quantidade === 1){
            const novoCarrinho = carrinho.filter(p => p.id !== produto.id);
            setCarrinho(novoCarrinho);
        } else {
            const novoCarrinho = carrinho.map(p => 
                p.id === produto.id 
                    ? { ...p, quantidade: p.quantidade - 1 } 
                    : p
            );
            setCarrinho(novoCarrinho);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if(!res.ok){
                    throw new Error("Erro ao buscar produto");
                }
                return res.json();
            })
            .then(data => setProduto(data))
            .catch(err => setErro(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    // ✅ ordem correta
    if(erro){
        return <h3 className="text-center mt-5 text-danger">{erro}</h3>
    }

    if(loading || !produto){
        return <h3 className="text-center mt-5">Carregando...</h3>
    }

    return(
        <div className="container d-flex justify-content-center align-items-center" style={{minHeight:"80vh"}}>

            <div className="card shadow-lg p-4 position-relative" style={{maxWidth:"900px", width:"100%"}}>

                <button 
                    className="btn btn-light position-absolute top-0 end-0 m-2"
                    onClick={() => navigate(-1)}
                    style={{
                        borderRadius:"50%",
                        width:"40px",
                        height:"40px"
                    }}
                >
                    ⬅️
                </button>

                <div className="row g-4 align-items-center">

                    <div className="col-md-6 text-center">
                        <img 
                            src={produto.image}
                            alt={produto.title}
                            style={{maxHeight:"300px", objectFit:"contain"}}
                        />
                    </div>

                    <div className="col-md-6">
                        <h3 className="mb-3">{produto.title}</h3>

                        <p className="text-muted">{produto.description}</p>

                        <h2 className="text-primary fw-bold mt-3">
                            R$ {produto.price}
                        </h2>

                        <div className="d-flex justify-content-center mt-3">
                            <div className="d-flex align-items-center gap-3 mt-3">

                                <button 
                                    className="btn btn-success"
                                    onClick={() => adicionarAoCarrinho(produto)}
                                >
                                    🛍️ Adicionar
                                </button>

                                <div className="d-flex align-items-center gap-2">
                                    <button 
                                        className="btn btn-outline-danger"
                                        onClick={diminuirQuantidade}
                                    >
                                        -
                                    </button>

                                    <span className="fw-bold text-center" style={{minWidth:"20px"}}>
                                        {quantidade}
                                    </span>

                                    <button 
                                        className="btn btn-outline-success"
                                        onClick={aumentarQuantidade}
                                    >
                                        +
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Produto;