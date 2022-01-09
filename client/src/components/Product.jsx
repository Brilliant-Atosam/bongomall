import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #99999965;
  opacity: 0;
  transition: all 0.7s ease-in-out;
`;
const Container = styled.div`
  flex: 1;
  padding: 20px;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  height: 350px;
  background: #c9d3df;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  width: 100%;
  z-index: 2;
`;

const Icon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;
  margin: 10px;
  &:hover {
    transform: scale(1.1);
    background: #f3f3f3;
  }
`;

export const Product = ({ item }) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
