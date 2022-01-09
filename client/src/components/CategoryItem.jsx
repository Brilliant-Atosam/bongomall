import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../Responsive';
const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: '30vh' })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 35px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
const Button = styled.button`
  background-color: white;
  color: #333;
  cursor: pointer;
  padding: 10px;
  font-weight: 500;
  border: none;
`;
function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Link to={`/products/${item.cat}`}>
        <Info>
          <Title>{item.title}</Title>
          <Button>shop now</Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;
