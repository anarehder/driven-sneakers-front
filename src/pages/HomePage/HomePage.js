import Header from "../../components/Header/Header";
import { ProductsContainer, ProductCard, ButtonBuy, ProductNamePrice } from "./StyledHomePage.js";
import { useContext, useEffect, useState } from "react";
import { Cart } from "../../contexts/CartContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {

  const [cartItems, setCartItems] = useContext(Cart);
  const [products, setProducts] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    setCarregando(true);
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/`);
    promise.then(resposta => {
      setProducts(resposta.data);
      setCarregando(false);
    })
    promise.catch(erro => {
      alert(erro.response.data);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (carregando === true) {
    return (
      <>
        <Header>
          CARREGANDO...
        </Header>
      </>
    )
  }

  function addToCart(product) {
    if (cartItems.some(element => element.id === product._id)) {
      cartItems.forEach(element => {
        if (element.id === product._id) {
          element.amount++
        }
      })
      setCartItems(cartItems);
    } else {
      const newItem = {
        id: product._id, amount: 1,
        name: product.name, image: product.image, price: product.price
      };
      setCartItems([...cartItems, newItem]);
    }
  }

  return (
    <>
      <Header />
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <img src={product.image} alt="produto" />
            <ProductNamePrice>
              <span>{product.name}</span>{" "}
              <span>R$ {Number(product.price).toFixed(2).replace(".", ",")}</span>
            </ProductNamePrice>
            <div>{product.description}</div>
            <div>
              <ion-icon onClick={() => addToCart(product)} name="cart-outline" ></ion-icon>
              <Link to={"/checkout"}>
                <ButtonBuy onClick={() => addToCart(product)}>COMPRAR</ButtonBuy>
              </Link>
            </div>
          </ProductCard>
        ))}
      </ProductsContainer>
    </>
  );
}
