import { createContext, useState } from "react";
import { useEffect } from "react";
export const CarrinhoContext = createContext();
export function CarrinhoProvider({ children}){
    const [carrinho, setCarrinho] = useState(() => {
        const carrinhoSalvo = localStorage.getItem("carrinho");
        return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    });
    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }, [carrinho]);
    return(
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    );
}