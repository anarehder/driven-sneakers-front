import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 40px 20px;
  position: absolute;
  top: 90px;
  right: 4vw;
  width: 84vw;
  min-height: 80vh;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #92f0ed;
`;

export const ProductCard = styled.div`
  width: 310px;
  height: 410px;
  margin: 5px;
  background-image: linear-gradient(163deg, #92f0ed 0%, #43817f 100%);
  border-radius: 20px;
  transition: all 0.3s;
  :hover{
    box-shadow: 0px 0px 30px 1px rgba(146, 240, 237, 0.6);
  }
`

export const ProductCard2 = styled.div`
    width: 310px;
    height: 410px;
    background-color: #fff;
    transition: all 0.2s;
    :hover{
        transform: scale(0.98);
        border-radius: 20px;
    }

    img {
        border: 1px solid #cecece;
        margin: 10px;
        border-radius: 15px;
        width: 290px;
        height: 200px;
        object-fit: cover;
    }
  div {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
  p{
    width: 290px;
    height: 65px;
    margin: 2px 10px;
    text-align: justify; 
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    } 

}
  ion-icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #387a77;
    :active{
        transform: scale(0.9);
    }
  }
`;

export const ProductNamePrice = styled.div`
  width: 290px;
  margin: 0 5px;
  span {
    font-size: 16px;
    max-width: 210px;
    font-weight: 600;
  }
`

  export const ButtonsContainer = styled.div`
    width: 290px;
    margin: 2px 5px;
    align-items: center;
  `


  export const ButtonBuy = styled.button`
    align-items: center;
    background-image: linear-gradient(144deg, #92f0ed 10%,#43817f);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-family: sans-serif;
    font-size: 18px;
    justify-content: center;
    line-height: 1em;
    padding: 3px;
    text-decoration: underline;
    text-decoration-color: #43817f;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;

    cursor: pointer;
    transition: all .3s;

    span {
    background-color: #43817f;
    padding: 16px 24px;
    border-radius: 6px;
    transition: 300ms;
    }


    :hover span {
    background: none;
    text-decoration: underline;
    text-decoration-color: #fff;
    }
    :active {
    transform: scale(0.9);
    }
    
  `