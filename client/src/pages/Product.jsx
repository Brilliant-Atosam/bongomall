import { Remove, Add } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { publicRequest } from '../requestMethods';
import { mobile } from '../Responsive';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';

const Short =
  'https://images.unsplash.com/photo-1601141256817-c60897f2776a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1lbidzJTIwc2hvcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
const Component = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;
const ImageContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Image = styled.img`
  height: 80vh;
  width: 100%;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;
const InfoContainer = styled.div`
  flex: 1;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: '100%' })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
`;
const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${props => props.color};
  margin-right: 10px;
`;
const FilterSize = styled.select`
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 20px 0;
  ${mobile({ width: '100%' })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.span`
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 30px;
  width: 30px;
  border-radius: 10px;
  font-weight: 600;
`;
const Button = styled.button`
  background: transparent;
  color: teal;
  border: 2px solid teal;
  cursor: pointer;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 600;
`;
function Product() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [choiceColor, setChoiceColor] = useState('');
  const [choiceSize, setChoiceSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
        setSize(res.data.size);
        setColor(res.data.color);
      } catch {}
    };
    getProduct();
  }, [id]);
  const handleQuantity = condition => {
    if (condition === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity, choiceSize, choiceColor }));
  };
  return (
    <Component>
      <Navbar />
      <Anouncement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {color.map(c => (
                <FilterColor
                  color={c}
                  key={c}
                  onClick={() => setChoiceColor(c)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>size:</FilterTitle>
              <FilterSize onChange={e => setChoiceSize(e.target.value)}>
                {size.map(s => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: 'pointer' }}
                onClick={() => handleQuantity('dec')}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: 'pointer' }}
                onClick={() => handleQuantity('inc')}
              />
            </AmountContainer>
            <Button onClick={handleAddToCart}>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Component>
  );
}

export default Product;
