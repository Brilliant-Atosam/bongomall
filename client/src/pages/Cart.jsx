import Navbar from '../components/Navbar';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../Responsive';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import { useHistory } from 'react-router-dom';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
  background: ${props => (props.type === 'filled' ? 'black' : 'transparent')};
  color: ${props => props.type === 'filled' && 'white'};
  border: ${props => props.type === 'filled' && 'none'};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  margin-right: 10px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column', marginBottom: '10px' })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  object-fit: contain;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductName = styled.span`
  text-transform: uppercase;
`;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;
const PriceDetails = styled.div`
  flex: 1;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  margin-top: 20px;
`;
const Hr = styled.hr`
  background: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  padding: 20px;
  border: 1px solid #eee;
  height: fit-content;
  width: 100%;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryTexts = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '600'};
  font-size: ${props => props.type === 'total' && '24px'};
  padding: 10px;
  border-bottom: 1px solid #eee;
`;
const SummaryText = styled.span``;
const Button = styled.button`
  background: #000;
  color: white;
  border: none;
  width: 100%;
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
`;
const SummaryAmount = styled.div``;
function Cart() {
  const history = useHistory();
  const [stripeToken, setStripeToken] = useState(null);
  const cart = useSelector(state => state.cart);
  console.log(cart);
  const onToken = token => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makePayment = async () => {
      const res = await userRequest.post('/checkout/payment', {
        tokenId: stripeToken.id,
        amount: cart.total * 100,
      });
      history.push('/success', { data: res.data });
    };
    stripeToken && makePayment();
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Navbar />
      <Anouncement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>COUNTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Yoour shopping bag (2)</TopText>
            <TopText>Yoour wishlist bag (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECK OUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.name}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.choiceColor} />
                    <ProductSize>
                      <b>Size:{product.choiceSize}</b>
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add style={{ cursor: 'pointer' }} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove style={{ cursor: 'pointer' }} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </PriceDetails>
              </Product>
            ))}
            <Hr />
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryTexts>
              <SummaryText>Subtotal:</SummaryText>
              <SummaryAmount>${cart.total}</SummaryAmount>
            </SummaryTexts>
            <SummaryTexts>
              <SummaryText>estimated shipping:</SummaryText>
              <SummaryAmount>$80</SummaryAmount>
            </SummaryTexts>
            <SummaryTexts>
              <SummaryText>discounted shipping: </SummaryText>
              <SummaryAmount>$80</SummaryAmount>
            </SummaryTexts>
            <SummaryTexts type='total'>
              <SummaryText>Total: </SummaryText>
              <SummaryAmount type='total'>${cart.total}</SummaryAmount>
            </SummaryTexts>
            <StripeCheckout
              name='10minutes shop'
              image='https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg'
              currency='USD'
              amount={cart.total * 100}
              billingAddress
              shippingAddress
              email=''
              stripeKey={process.env.REACT_APP_STRIPE_PK}
              description={`Your total is $ ${cart.total}`}
              token={onToken}
            ></StripeCheckout>
            {/* <Button>CHECKOUT NOW!</Button> */}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
