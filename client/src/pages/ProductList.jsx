import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { Products } from '../components/Products';
import { mobile } from '../Responsive';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Container = styled.div``;
const FilterContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
  ${mobile({ margin: '10px' })}
`;
const Filter = styled.div`
  padding: 10px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ display: 'flex', flexDirection: 'column' })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
`;
const Option = styled.option``;
function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  const handleFilters = e => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Anouncement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Items:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option>Color</Option>
            <Option>black</Option>
            <Option>blue</Option>
            <Option>silver</Option>
            <Option>multi</Option>
            <Option>brown</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option>Size</Option>
            <Option>XXL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Items:</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value='newest'>
              Newest
            </Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
