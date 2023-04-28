import styled from "styled-components";

export const ProductsContainer = styled.div`
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    position: absolute;
    top: 90px;
    right: 4vw;
    width: 84vw;
    min-height: 80vh;
    background-color: white;
    border-radius: 8px;
    
`

export const ProductCard = styled.div`
    position: relative;
    box-sizing: border-box  ;
    width: 310px;
    border: 3px solid #387A77;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    background-size: cover;
    img{
        border-radius: 5px;
        width: 298px;
        height: 200px;
        object-fit: cover;
    }
    div{
        display: flex;
        justify-content: space-between;
        padding: 5px;
    }
    ion-icon{
        width: 40px;
        height: 40px;
        cursor: pointer;
        color: #387A77;
    }

`

export const ProductNamePrice = styled.div`
    width: 100%;
    span{
        padding: 2px;
        max-width: 220px;
        gap: 10px;
        font-size: 16px;
    }
`

export const ButtonBuy= styled.button`
    background-color: #fff;
    border: 2px solid #387A77;
    border-radius: 7px;
    margin-top: 5px;
    margin-left: 15px;
    width: 120px;
    height: 35px;
    font-size: 18px;
    cursor: pointer;
`