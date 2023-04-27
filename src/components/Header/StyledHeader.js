import styled  from "styled-components";

export const ScreenContainer = styled.div`
    background-color: #cecece;
    z-index: 1;
    position: fixed;
    top: 0;
    right: 1vw;
    width: 98vw;
    height: 115px;
`
export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
        font-family: 'Saira Stencil One', cursive;
        font-size: 45px;   
    }
    a{
        text-decoration: none;
        color: #000;
    }
`
export const BarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`
export const SignUpContainer = styled.div`

    display: flex;
    align-items: center;
    margin-right: 7%;
    button{
        width: 100px;
        height: 30px;
        margin-left: 20px;
        border-radius: 15px;
        border: none;
        cursor: pointer;
    }
    ion-icon{
        width: 40px;
        height: 40px;
        margin-left: 20px;
        cursor: pointer;
    }
`
export const InputContainer = styled.div`
margin-left: 7%;
input{
        ::placeholder{
            padding-left: 5%;
        }
        height: 30px;
        width: 250px;
        border-radius: 15px;
        border: none;
    }
`