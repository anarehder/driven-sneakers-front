import GlobalStyle from "./css/GlobalStyle";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
