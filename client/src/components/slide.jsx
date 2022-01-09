import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Image1 from '../images/deal.png';
import Image2 from '../images/deal2.png';
import Image3 from '../images/deal3.png';
import { useState } from 'react';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #dc143c86;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  transition: all 1.4s ease-in-out;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;
const Slider = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
`;
const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 60px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
`;
function Slide() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleSlide = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleSlide('left')}>
        <ArrowLeftOutlinedIcon style={{ color: 'white' }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slider>
          <ImageContainer>
            <Image src={Image1} />
          </ImageContainer>
          <TextContainer>
            <Title>summer deals</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nulla voluptatem earum veniam illo, sapiente quasi.
            </Desc>
            <Button>shop now</Button>
          </TextContainer>
        </Slider>
        <Slider>
          <ImageContainer>
            <Image src={Image2} />
          </ImageContainer>
          <TextContainer>
            <Title>Winter deals</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nulla voluptatem earum veniam illo, sapiente quasi.
            </Desc>
            <Button>shop now</Button>
          </TextContainer>
        </Slider>
        <Slider>
          <ImageContainer>
            <Image src={Image3} />
          </ImageContainer>
          <TextContainer>
            <Title>autum deals</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nulla voluptatem earum veniam illo, sapiente quasi.
            </Desc>
            <Button>shop now</Button>
          </TextContainer>
        </Slider>
      </Wrapper>
      <Arrow direction='right' onClick={() => handleSlide('right')}>
        <ArrowRightOutlinedIcon style={{ color: 'white' }} />
      </Arrow>
    </Container>
  );
}

export default Slide;
