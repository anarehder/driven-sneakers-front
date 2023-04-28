import { ScreenContainer, LogoContainer, BarContainer, InputContainer, SignUpContainer } from "./StyledHeader.js"
import logoCompleta from "../../assets/logo_completa.png"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <ScreenContainer>

            <BarContainer>
                <InputContainer>
                    <input placeholder="Pesquisar"></input>
                </InputContainer>
                <LogoContainer>
                    <Link to={"/"}>
                        <img src={logoCompleta} alt="logo" />
                    </Link>
                </LogoContainer>
                <SignUpContainer>
                    <button>Cadastre-se</button>
                    <button>Entrar</button>
                    <Link to={"/checkout"}>
                        <ion-icon name="cart-outline" ></ion-icon>
                    </Link>
                    <ion-icon name="exit-outline"></ion-icon>
                </SignUpContainer>
            </BarContainer>
        </ScreenContainer>
    )
}