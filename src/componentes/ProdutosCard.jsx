function ProdutosCard({produto}){
    return(
        <div className="col-md-3 mb-4">
            <div className="card h-100 text-center card-produto">
                <div className="d-flex justify-content-center p-3">
                    <img
                        src={produto.image}
                        style={{height:"200px",objectFit:"contain"}}
                    />
                </div>
               
                <div className="card-body d-flax dlex-column">
                    <h6 className="card-title flex grow-1">{produto.title}</h6>
                    <p className="preco-produto fw-bold">R$ {produto.price}</p>
                </div>
        </div>
    </div>
    )
}
export default ProdutosCard