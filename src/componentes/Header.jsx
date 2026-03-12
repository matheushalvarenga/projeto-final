function Header(){
    return(
        <header className="text-white p-3" style={{background:"#0d6efd"}}>
            <div className="container position-relative text-center">
                <h3 className="fw-bold mb-1">Minha Lojinha</h3>
                <div className= "position-absolute top-50 end-0 translate-middle-y"stryle={{fontSize:"35px"}}>
                    🛒
                </div>
            </div>
        </header>
    )
}
export default Header