import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

function Carrinho(){
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    function removerProduto(id){
        const novoCarrinho = carrinho.filter(p => p.id !== id);
        setCarrinho(novoCarrinho);
    }

    function limparCarrinho(){
        setCarrinho([]);
    }

    const total = carrinho.reduce((acc, p) => {
        return acc + (p.price * p.quantidade);
    }, 0);

    return(
        <div className="container mt-4">
            <h2>🛍️ Carrinho</h2>

            {carrinho.length === 0 ? (
                <p>Seu carrinho está vazio</p>
            ) : (
                <>
                    {carrinho.map(produto => (
                        <div 
                            key={produto.id} 
                            className="card mb-3 p-3 d-flex flex-row align-items-center"
                        >
                            <img 
                                src={produto.image} 
                                alt={produto.title}
                                style={{height:"80px", marginRight:"15px"}}
                            />

                            <div className="flex-grow-1">
                                <h6>{produto.title}</h6>
                                <p>Quantidade: {produto.quantidade}</p>
                                <p>R$ {produto.price}</p>
                            </div>

                            <button 
                                className="btn btn-danger" 
                                onClick={() => removerProduto(produto.id)}
                            >
                                Remover
                            </button>
                        </div>
                    ))}

                    <h4 className="mt-3">
                        Total: R$ {total.toFixed(2)}
                    </h4>

                    <button 
                        className="btn btn-warning mt-2" 
                        onClick={limparCarrinho}
                    >
                        Limpar
                    </button>
                </>
            )}
        </div>
    )
}

export default Carrinho;