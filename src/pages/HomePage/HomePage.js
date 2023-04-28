import Header from "../../components/Header/Header";
import { ProductsContainer, ProductCard, ButtonBuy } from "./StyledHomePage.js";
import { useContext, useEffect, useState } from "react";
import { Cart } from "../../contexts/CartContext";
import axios from "axios";

export default function HomePage() {

  const [cartItems, setCartItems] = useContext(Cart);
  const [products, setProducts] = useContext(Cart);
  const [carregando, setCarregando] = useState(false);

  // PARA USAR QUANDO FOR CONECTAR COM O BACKEND
  //const promise = axios.get(`${process.env.REACT_APP_API_URL}/operations`, config);

  useEffect(() => {
    setCarregando(true);
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/`);
    promise.then(resposta => {
      console.log(resposta.data)
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
            <div>
              <span>{product.name}</span>{" "}
              <span>R$ {Number(product.price).toFixed(2)}</span>
            </div>
            <div>{product.description}</div>
            <ButtonBuy onClick={() => addToCart(product)}>COMPRE</ButtonBuy>
          </ProductCard>
        ))}
      </ProductsContainer>
    </>
  );
}
