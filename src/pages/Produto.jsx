import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Produto(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduto(data));
    }, [id]);

    if(!produto){
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
      
                <button className="btn btn-primary mt-3 w-100">
                  🛒Adicionar ao carrinho
                </button>
              </div>
      
            </div>
      
          </div>
      
        </div>
      )
}

export default Produto;