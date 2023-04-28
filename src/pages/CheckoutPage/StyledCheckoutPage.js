import styled from "styled-components";

export const CheckoutContainer = styled.div`
    margin: 0 auto;
    margin-top: 150px;
    max-width: 1300px;
    font-size: 26px;
    font-weight: 700;
    text-align: center;
`
export const ProdutosCarrinho = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 400;
`

export const Cabeçalho = styled.div`
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #387A77;
    padding-bottom: 10px;
    div{
        display: flex;
        align-items: center;
        gap: 30px;
        text-align: center;
    }
    span{
        width: 150px;
    }
`

export const Conteudo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: justify;
    padding-bottom: 10px;
    border-bottom: 2px solid #387A77;
    div{
        display: flex;
        align-items: center;
        gap: 30px;
    }
    img {
        width: 100px;
    }
    span{
        width: 150px;
        text-align: center;

    }
`

export const Total = styled.div`
    margin: 15px 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
    gap: 30px;
    p{
        width: 150px;
    }
`

export const DadosEntrega = styled.div`
    margin: 30px;
    input{
        margin-bottom: 15px;
        height: 40px;
        min-width: 300px;
        width: 800px;
        border-radius: 20px;
        border: 2px solid #387A77;
        padding-left: 15px;
    }
`

export const Avaliacao = styled.div`
    margin: 30px;
    img{
        width: 150px;
        margin-bottom: 30px;
    }
`

export const Finalizar = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;
    button{
        width: 200px;
        height: 70px;
        border-radius: 50px;
        cursor: pointer;
        border: 5px solid #387A77;
        background-color: #fff;
    }
`