import Header from "../../components/Header/Header";
import { Cabeçalho, CheckoutContainer, Conteudo, DadosEntrega, Finalizar, Avaliacao, ProdutosCarrinho, Total } from "./StyledCheckoutPage";
import ratingCode from "../../assets/My_Rating_Page.png";
import { useContext } from "react";
import { Cart } from "../../contexts/CartContext";

export default function CheckoutPage() {
    const [cartItems,] = useContext(Cart);

    let soma = 0;
    cartItems.forEach(element => (soma += Number(element.price)));

    console.log(cartItems)
    return (
        <>
            <Header />
            <CheckoutContainer>
                PRODUTOS
                <ProdutosCarrinho>
                    <Cabeçalho>
                        <p>PRODUTO</p>
                        <div>
                            <span>QTD</span>
                            <span>PREÇO</span>
                        </div>
                    </Cabeçalho>
                    {cartItems.map((product) => (
                        <Conteudo key = {product.id}>
                            <div>
                                <img src={product.image} alt="produto" />
                                <p>{product.name}</p>{" "}
                            </div>
                            <div>
                                <span> {product.amount} </span>
                                <span>R$ {Number(product.price).toFixed(2).replace(".",",")}</span>
                            </div>
                        </Conteudo>
                    ))}
                    <Total>
                        <p> Total</p>
                        <p> R$ {soma.toFixed(2).replace(".",",")} </p>
                    </Total>
                </ProdutosCarrinho>
                ENDERECO DE ENTREGA
                <DadosEntrega>
                    <input placeholder="Endereço de entrega" />
                    <input placeholder="CEP da entrega" />
                </DadosEntrega>
                AVALIE NOSSA LOJA
                <Avaliacao>
                    <img src={ratingCode} alt="avaliacao" />
                </Avaliacao>
                CONFIRMAR E FINALIZAR PEDIDO
                <Finalizar>
                    <button>
                        ENVIAR PEDIDO
                    </button>
                </Finalizar>
            </CheckoutContainer>
        </>
    );
}