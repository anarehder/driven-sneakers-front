import { createContext, useState } from "react";
export const Cart = createContext();

export default function CartProvider({ children}){
    const [cartItems, setCartItems] = useState([])

    return(
        <Cart.Provider value = {[cartItems, setCartItems]}>
            {children}
        </Cart.Provider>
    )
}