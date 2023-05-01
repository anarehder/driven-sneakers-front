import { ScreenContainer, LogoContainer, BarContainer, InputContainer, FunctionsContainer, SignUpContainer } from "./StyledHeader.js"
import logoCompleta from "../../assets/logo_completa.png"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { Cart } from "../../contexts/CartContext";



export default function Header() {
    const navigate = useNavigate()
    const [itens, setItens] = useContext(Cart)

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
                <FunctionsContainer>
                    <SignUpContainer onClick={() => navigate("/signin")}>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <span>Olá, faça seu login ou cadastre-se</span>
                    </SignUpContainer>
                    <>
                    <Link to={"/checkout"}>
                        <ion-icon name="cart-outline" ></ion-icon>
                        {itens.length===0?"":<p>{itens.length}</p>}
                    </Link>
                    <ion-icon name="exit-outline" onClick={setItens}></ion-icon>
                    </>
                </FunctionsContainer>
            </BarContainer>
        </ScreenContainer>
    )
}