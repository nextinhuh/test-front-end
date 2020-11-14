import React from 'react';

import { BiMouse, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Container, Header, CardOne, CordTwo, CardTwoContent } from './styles';

import iconImg from '../../assets/icon.png';
import cardOneImg from '../../assets/card-1/image.png';
import imgGrant from '../../assets/card-2/Grant.png';
import imgRed from '../../assets/card-2/Red.png';
import imgSybil from '../../assets/card-2/Sybil_2.png';

const Landing: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={iconImg} alt="Supergiantgames" />
        <p>SUPERGIANTGAMES</p>
      </Header>

      <CardOne>
        <div>
          <p>TRANSISTOR - RED THE SINGER</p>

          <img src={cardOneImg} alt="Campeão Imagem" />

          <p>
            "Olha, o que quer que você esteja pensando, me faça um favor, não
            solte."
          </p>
          <BiMouse size={20} color="#FFF" />
        </div>
      </CardOne>
      <CordTwo>
        <BiChevronLeft size={110} color="#FFF" />
        <CardTwoContent>
          <div>
            <img src={imgGrant} alt="Imagem do Grant" />
          </div>
          <p>
            A Camerata foi apoenas os dois no início e suas fileiras nunca foram
            destinadas a exceder um número a ser contado em uma mão.
          </p>
        </CardTwoContent>
        <CardTwoContent>
          <div>
            <img src={imgRed} alt="" />
          </div>
          <p>
            Red, uma jomvem cantora, entrou em posse do Trnsistor. Sendo a
            poderosa espada falante. O grupo Possessores quer tanto ela quanto o
            Transistor e está perseguindo implacavelmente a sua procura.
          </p>
        </CardTwoContent>
        <CardTwoContent>
          <div>
            <img src={imgSybil} alt="" />
          </div>
          <p>
            Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da
            Camerata.
          </p>
        </CardTwoContent>
        <BiChevronRight size={110} color="#FFF" enableBackground={500} />
      </CordTwo>
    </Container>
  );
};

export default Landing;
