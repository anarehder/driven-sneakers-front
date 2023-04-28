import styled  from "styled-components";

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

export const Deletar = styled.span`
    width: 20px !important;
`