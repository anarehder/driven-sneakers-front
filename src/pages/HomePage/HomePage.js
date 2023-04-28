import Header from "../../components/Header/Header";
import { ProductsContainer, ProductCard, ButtonBuy } from "./StyledHomePage.js";
import products from "../../constants/productsExample.js";
import { useContext } from "react";
import { Cart } from "../../contexts/CartContext";

export default function HomePage() {

  const [cartItems, setCartItems] = useContext(Cart);

  function addToCart(product) {
    if (cartItems.some(element => element.id === product._id)) {
      cartItems.forEach(element => {
        if (element.id === product._id) {
          element.amount++
        }
      })
      setCartItems(cartItems);
    } else {
      const newItem = { id: product._id, amount: 1,
        name: product.name, image: product.image, price: product.price};
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
              <span>R$ {product.price.toFixed(2)}</span>
            </div>
            <div>{product.description}</div>
            <ButtonBuy onClick={() => addToCart(product)}>COMPRE</ButtonBuy>
          </ProductCard>
        ))}
      </ProductsContainer>
    </>
  );
}
