import { ScreenContainer, LogoContainer, BarContainer, InputContainer, SignUpContainer} from "./StyledHeader.js"

export default function Header(){
    return(
        <ScreenContainer>
            <LogoContainer>
                <span>Nome da Loja</span>
            </LogoContainer>
            <BarContainer>
                <InputContainer>
                    <input placeholder="Pesquisar"></input>
                </InputContainer>
                <SignUpContainer>
                    <button>Cadastre-se</button>
                    <button>Entrar</button>
                    <ion-icon name="cart-outline"></ion-icon>
                    <ion-icon name="exit-outline"></ion-icon>
                </SignUpContainer>
            </BarContainer>
        </ScreenContainer>
    )
}