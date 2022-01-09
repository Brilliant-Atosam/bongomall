import styled from 'styled-components';
import { mobile } from '../Responsive';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#807b7b49, #6666661d),
    url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80');
  background-size: 100%, 100%, cover;
`;
const Wrapper = styled.div`
  width: 40%;
  background: #ffffff92;
  padding: 20px;
  ${mobile({width: '75%'})}

`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  margin: 20px 0;
  font-size: 12px;
  `;
const Button = styled.button`
display: block;
width: 40%;
border: none;
background: teal;
color: white;
padding: 10px;
font-weight: 600;
cursor: pointer;
text-transform: uppercase;
`;

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder='First name' />
          <Input placeholder='Last name' />
          <Input placeholder='email' />
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Input placeholder='Confirm password' />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iusto.
          </Agreement>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
