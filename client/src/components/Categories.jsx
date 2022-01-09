import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import {mobile} from '../Responsive'
const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({padding: '0px', flexDirection: 'column'})}
`;

function Categories() {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
}

export default Categories;
