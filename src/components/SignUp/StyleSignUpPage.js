import styled from "styled-components";

export const ScreenContainer = styled.div`
    margin-top: 116px;
    background-color: #fff;
`

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
    }
    input{
        margin: 10px ;
    }
    button{
        margin: 20px;
        height: 40px;
        width: 310px;
        color: #387A77;
    }
    a{
        color: #387A77;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', sans-serif;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    a{
        text-decoration: none;
        color: #000;
    }
    img {
        max-width: 40px;
    }
`

export const TitleText = styled.div`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16pt;
    font-weight: 700;
    text-decoration: underline;
    color: #387A77;

`