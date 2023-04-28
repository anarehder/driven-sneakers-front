import Header from "../../components/Header/Header";
import { Cabeçalho, CheckoutContainer, Conteudo, DadosEntrega, Finalizar, Avaliacao, ProdutosCarrinho, Total } from "./StyledCheckoutPage";
import products from "../../constants/productsExample.js";
import ratingCode from "../../assets/My_Rating_Page.png";

export default function CheckoutPage() {
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
                    <Conteudo>
                        <div>
                            <img src={products[1].image} alt="produto" />
                            <p>{products[1].product}</p>{" "}
                        </div>
                        <div>
                            <span> 1 </span>
                            <span>R$ {products[1].price.toFixed(2)}</span>
                        </div>
                    </Conteudo>
                    <Total>
                        <p> Total</p>
                        <p> R$ {products[1].price.toFixed(2)} </p>
                    </Total>
                </ProdutosCarrinho>
                ENDERECO DE ENTREGA
                <DadosEntrega>
                    <input placeholder="Endereço de entrega" />
                    <input placeholder="CEP da entrega" />
                </DadosEntrega>
                AVALIE NOSSA LOJA
                <Avaliacao>
                    <img src={ratingCode} alt="avaliacao"/>
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