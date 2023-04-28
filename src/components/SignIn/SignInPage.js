import Header from "../Header/Header";
import {
  ScreenContainer,
  SignInContainer,
  TitleContainer,
  TitleText,
} from "./StyleSignInPage";
import { useState, useContext } from "react";
import logo from "../../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { signin } from "../../services/auth";

export default function SignUpPage() {
  const [form, setForm] = useState({});
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSendForm(e) {
    e.preventDefault();
    signin(form).then((res) => {
      if (res.data.message) {
        return alert(res.data.message);
      }

      setUser(res.data.token);
      navigate("/");
    });
  }
  return (
    <ScreenContainer>
      <Header />
      <SignInContainer>
        <TitleContainer>
          <img src={logo} alt="logo" />
          <TitleText>
            <h1>Faça aqui o seu Login</h1>
          </TitleText>
          <img src={logo} alt="logo" />
        </TitleContainer>
        <form>
          <input
            placeholder="E-mail"
            name="email"
            type="email"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <input
            placeholder="Senha"
            name="password"
            type="password"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <button onClick={handleSendForm}>Entrar</button>
        </form>
        <Link to="/signup">Primeira vez? Cadastre-se!</Link>
      </SignInContainer>
    </ScreenContainer>
  );
}
