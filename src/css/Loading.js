import styled from "styled-components"
import tenisGif from "../assets/gif_tenis.gif"

export default function Loading(){
    return(
        <LoadingPage>
            <img src={tenisGif} alt="carregando"/>
            <h1>Carregando...</h1>
        </LoadingPage>
    )
}

const LoadingPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    h1{
        margin-top: 115px;
        color: #387A77;
        font-size: 32px;
        font-weight: 700;
        text-transform: uppercase;
        position: absolute;
        top: 5vh;
        z-index: 1;
        animation: go-back 1s infinite alternate;
        @keyframes go-back {
            from {
                opacity: 1;
            }
            to {
                opacity: 0.3;
            }
        }
        
    }
    img{
        margin-top: 115px;
        width: 45vw;
    }
`