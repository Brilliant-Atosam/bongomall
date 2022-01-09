import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { slideData } from '../data';
import {mobile} from '../Responsive'
const Container = styled.div`
  width: 100%; 
   height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
  ${mobile({display: 'none'})}
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #c42c2c96;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  z-index: 2;
  cursor: pointer;
`;
const Wrapper = styled.div`
  height: 100%;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1.4s ease;
  display: flex;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
`;
const Desc = styled.p`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20px;
  margin: 50px 0;
`;
const Button = styled.button`
  background: transparent;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleSlide = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleSlide('left')}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideData.map(item => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>shop now!</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction='right' onClick={() => handleSlide('right')}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
