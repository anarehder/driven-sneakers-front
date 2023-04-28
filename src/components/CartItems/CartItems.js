import { Conteudo, Deletar } from "./StyledCartItems"
import { Cart } from "../../contexts/CartContext";
import { useContext } from "react";

export default function CartItems({ product }) {
    const [cartItems, setCartItems] = useContext(Cart);

    function deleteFromCart (id) {
        console.log(id);
        if (cartItems.some(element => element.id === id)) {
            const newCart = cartItems.filter(element => element.id !== id)
            setCartItems(newCart);
        }
    }

    return (
        <>
        <Conteudo>
            <div>
                <img src={product.image} alt="produto" />
                <p>{product.name}</p>{" "}
            </div>
            <div>
                <span> {product.amount} </span>
                <span>R$ {Number(product.price).toFixed(2).replace(".", ",")}</span>
                <Deletar onClick={() => deleteFromCart(product.id)}> x </Deletar>
            </div>
        </Conteudo>
        </>
    )
}