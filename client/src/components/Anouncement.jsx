import styled from 'styled-components';
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
`;

const Anouncement = () => {
  return (
    <Container>Super Deals! Fress shipping on orders above $200.00</Container>
  );
};

export default Anouncement;
