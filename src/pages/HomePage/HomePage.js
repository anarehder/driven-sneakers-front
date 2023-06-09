import Header from "../../components/Header/Header";
import {
  ProductsContainer,
  ProductCard,
  ProductCard2,
  ButtonBuy,
  ButtonsContainer,
  ProductNamePrice,
} from "./StyledHomePage.js";
import { useContext, useEffect, useState } from "react";
import { Cart } from "../../contexts/CartContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../css/Loading";

export default function HomePage() {
  const [cartItems, setCartItems] = useContext(Cart);
  const [products, setProducts] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [addCartHeader, setAddCartHeader] = useState(0)

  useEffect(() => {
    setCarregando(true);
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/`);
    promise.then((resposta) => {
      setProducts(resposta.data);
      setCarregando(false);
    });
    promise.catch((erro) => {
      alert(erro.response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addToCart(product) {
    setAddCartHeader(addCartHeader+1)
    if (cartItems.some((element) => element.id === product._id)) {
      cartItems.forEach((element) => {
        if (element.id === product._id) {
          element.amount++;
        }
      });
      setCartItems(cartItems);
    } else {
      const newItem = {
        productID: product._id,
        productAmout: 1,
        name: product.name,
        image: product.image,
        price: product.price,
      };
      setCartItems([...cartItems, newItem]);
    }
  }

  if (products.length === 0 || carregando === true) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  return (
    <>
      <Header/>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <ProductCard2>
              <img src={product.image} alt="produto" />
              <ProductNamePrice>
                <span>{product.name}</span>{" "}
                <span>
                  R$ {Number(product.price).toFixed(2).replace(".", ",")}
                </span>
              </ProductNamePrice>
              <p>{product.description}</p>
              <ButtonsContainer>
                <ion-icon
                  onClick={() => addToCart(product)}
                  name="cart-outline"
                ></ion-icon>
                <Link to={"/checkout"}>
                  <ButtonBuy onClick={() => addToCart(product)}>
                    <span>COMPRAR</span>
                  </ButtonBuy>
                </Link>
              </ButtonsContainer>
            </ProductCard2>
          </ProductCard>
        ))}
      </ProductsContainer>
    </>
  );
}
