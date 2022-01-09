import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../Responsive';
const Container = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #cfe1e770;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  font-size: 24px;
  margin: 20px 0;
  ${mobile({textAlign: 'center', padding: '10px 20px'})}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #999;
  ${mobile({width: '80%'})}
`;
const Input = styled.input`
  flex: 8;
  height: 100%;
  border: none;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  height: 100%;
  border: none;
  background: #1bbfc5;
  color: white;
  cursor: pointer;
`;
function Newsletter() {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get timely updates from your favourite products</Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
