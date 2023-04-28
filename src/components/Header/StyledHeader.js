import styled  from "styled-components";

export const ScreenContainer = styled.div`
    //background-color: #cecece;
    background-color: #fff;
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 115px;
    border-bottom: 2px solid #387A77;
`

export const BarContainer = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 7%;
`

export const LogoContainer = styled.div`
    a{
        text-decoration: none;
        color: #000;
    }
    img {
        max-width: 250px;
    }
`

export const InputContainer = styled.div`
    width: 310px;
    input{
            height: 30px;
            width: 310px;
            border-radius: 15px;
            border: 2px solid #387A77;
            padding-left: 5%;
        }
`

export const SignUpContainer = styled.div`
    display: flex;
    align-items: center;
    width: 310px;
    gap: 10px;
    button{
        width: 100px;
        height: 30px;
        border-radius: 15px;
        cursor: pointer;
        border: 2px solid #387A77;
        background-color: #fff;
    }
    ion-icon{
        width: 40px;
        height: 40px;
        cursor: pointer;
        color: #387A77;
    }
`
