import React, { useContext } from 'react';
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Container = styled.div`
  height: 60px;
  justify-content: space-between;
  ${mobile({ height: '50px' })}
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  ${mobile({ padding: '10px 0px' })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid #333;
  margin-left: 20px;
  height: 30px;
  padding: 10px;
  ${mobile({ marginLeft: '20px' })}
`;
const Input = styled.input`
  border: none;
  :focus {
    outline: none;
  }
  ${mobile({ width: '50px' })}
`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  ${mobile({ flex: '2', justifyContent: 'center' })}
`;
const MenuItem = styled.div`
  margin-left: 25px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  ${mobile({ marginLeft: '10px', fontSize: '12px' })}
`;
const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search...' />
            <Search style={{ color: '#333', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to='/'>
            <Logo>BONGO.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to='/register'>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to='/login'>
            <MenuItem>Sign in</MenuItem>
          </Link>
          <MenuItem>
            <Link to='/cart'>
              <Badge badgeContent={quantity} color='secondary'>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
