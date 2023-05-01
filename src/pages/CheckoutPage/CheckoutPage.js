import Header from "../../components/Header/Header";
import {
  Cabeçalho,
  CheckoutContainer,
  DadosEntrega,
  Finalizar,
  Avaliacao,
  ProdutosCarrinho,
  Total,
} from "./StyledCheckoutPage";
import ratingCode from "../../assets/My_Rating_Page.png";
import { useContext, useState } from "react";
import { Cart } from "../../contexts/CartContext";
import CartItems from "../../components/CartItems/CartItems";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useContext(Cart);
  const { user } = useContext(UserContext);
  const [form, setForm] = useState({ address: "" });
  const navigate = useNavigate();

  let soma = 0;
  cartItems.forEach((element) => (soma += Number(element.price)));
  //console.log(user)
  //console.log(cartItems)

  function handleChange(e) {
    const addressAtualizado = { ...form, [e.target.name]: e.target.value };
    setForm(addressAtualizado);
  }

  function sentPurchase(e) {
    e.preventDefault();
    if (!user.email) {
      Swal.fire({
        title: "Você precisa estar logado, por favor faça o login",
        icon: "warning",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate("/signin");
    }
    const products = cartItems.map((element) => ({
      productAmout: Number(element.productAmout),
      productID: element.productID,
    }));
    const body = {
      email: user.email,
      totalPrice: soma.toString(),
      address: form.address,
      product: products,
    };
    console.log(body);
    const promise = axios.post(
      `${process.env.REACT_APP_API_URL}/checkout`,
      body
    );

    promise.then((resposta) => {
      alert(`Olá, sua compra foi efetuada com sucesso!!`);
      setCartItems([]);
      navigate("/");
    });
    promise.catch((erro) => {
      alert(erro.response.data);
    });
  }

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
            <CartItems key={product.productID} product={product}></CartItems>
          ))}
          <Total>
            <p> Total</p>
            <p> R$ {soma.toFixed(2).replace(".", ",")} </p>
          </Total>
        </ProdutosCarrinho>
        ENDERECO DE ENTREGA
        <form onSubmit={sentPurchase}>
          <DadosEntrega>
            <input
              placeholder="Endereço de entrega com CEP"
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </DadosEntrega>
          AVALIE NOSSA LOJA
          <Avaliacao>
            <img src={ratingCode} alt="avaliacao" />
          </Avaliacao>
          CONFIRMAR E FINALIZAR PEDIDO
          <Finalizar>
            <button type="submit">ENVIAR PEDIDO</button>
          </Finalizar>
        </form>
      </CheckoutContainer>
    </>
  );
}
