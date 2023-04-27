import Header from "../../components/Header/Header";
import { ProductsContainer, ProductCard, ButtonBuy } from "./StyledHomePage.js";
import products from "../../constants/productsExample.js";
export default function HomePage() {
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
            <ButtonBuy>COMPRE</ButtonBuy>
          </ProductCard>
        ))}
      </ProductsContainer>
    </>
  );
}
