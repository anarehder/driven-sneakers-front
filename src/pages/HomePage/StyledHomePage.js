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
    width: 300px;
    height: 300px;
    border: solid 1px black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
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
`

export const ButtonBuy= styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: red;
    border: none;
    border-radius: 7px;
    margin-top: 5px;
    width: 100px;
    height: 35px;
    font-size: 18px;
    cursor: pointer;
`