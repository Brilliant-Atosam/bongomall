import {
  Email,
  Facebook,
  Instagram,
  LocalPhone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../Responsive';
const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  ${mobile({flexDirection: 'column'})}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 800;
`;
const Desc = styled.p`
  margin-bottom: 20px;
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  margin-right: 20px;
  background: #${props => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: 'none'})}
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  padding: 20px;
  flex: 1;
`;
const ContactItem = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Payments = styled.img``
function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Bongo</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          nemo laborum repudiandae sequi. Architecto exercitationem quam vero
          quidem doloribus ab repellat commodi. Cumque, doloremque?
        </Desc>
        <IconsContainer>
          <Icon bg='4267B2'>
            <Facebook />
          </Icon>
          <Icon bg='fb3958'>
            <Instagram />
          </Icon>
          <Icon bg='1DA1F2'>
            <Twitter />
          </Icon>
          <Icon bg='E60023'>
            <Pinterest />
          </Icon>
        </IconsContainer>
      </Left>
      <Center>
        <Title>useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Men fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order tracking</ListItem>
          <ListItem>wislist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Women's fashion</ListItem>
          <ListItem>my account</ListItem>
          <ListItem>Blogs</ListItem>
          <ListItem>terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: '10px'}} /> Yankey street 18, Sefwi-Wiawso, WN
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{marginRight: '10px'}} /> +233 (0)544006865
        </ContactItem>
        <ContactItem>
          <Email style={{marginRight: '10px'}} /> info@bongo.shop
        </ContactItem>
        <Payments src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mkqDH8KLORDBYDyp4MIdRQ2bDx4EwUWT9w&usqp=CAU' />
      </Right>
    </Container>
  );
}

export default Footer;
