import styled from 'styled-components';

import cardOneBackgroud from '../../assets/card-1/background.png';
import cardOneBackgroundImg from '../../assets/card-1/background-image.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  background: #363636;

  img {
    width: 109px;
    height: 109px;
  }

  p {
    color: #ffffff;
    font-size: 23px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    margin-left: 15px;
  }
`;

export const CardOne = styled.div`
  background: url(${cardOneBackgroud}) no-repeat center;
  background-size: cover;
  justify-content: center;
  display: flex;
  flex: 1;
  width: 100vw;

  div {
    background-color: blue;
    width: 580px;
    height: 100vh;
    background: url(${cardOneBackgroundImg}) no-repeat center;
    display: flex;
    flex-direction: column;

    p {
      margin-top: 120px;
      margin-left: 30px;
      color: #ffffff;
      font-weight: bold;
      font-family: 'Open Sans', sans-serif;
    }

    img {
      width: 520px;
      height: 700px;
      margin-top: 15px;
      align-self: center;
    }

    img + p {
      align-self: center;
      max-width: 270px;
      text-align: center;
      margin: 0;
      color: #f0f0f2;
      font-weight: normal;
      font-size: 18px;
    }
  }
`;

export const CordTwo = styled.div`
  display: flex;
  width: 90vw;
  height: 100vh;
  padding: 40px 60px;
  align-items: center;
  justify-content: space-between;
`;

export const CardTwoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 610px;
  margin-top: 130px;
  background-color: white;
  align-items: center;
  border-radius: 20px;

  div {
    width: 370px;
    height: 420px;
    border: 2px solid #999;
    border-radius: 100px;
    border-color: #fff;
    margin-top: -60px;
    background-color: #363636;
  }

  img {
    width: 370px;
    height: 520px;
    margin-top: -100px;
  }

  p {
    margin-top: 20px;
    max-width: 300px;
    font-family: 'Open Sans', sans-serif;
  }
`;
