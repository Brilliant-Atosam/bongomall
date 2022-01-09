import { useState } from 'react';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../Responsive';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/lodinRedux';
import { publicRequest } from '../requestMethods';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#807b7b49, #6666661d),
    url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80');
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 25%;
  background: #ffffff92;
  padding: 20px;
  display: flex;
  flex-direction: column;
  ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`;

const Button = styled.button`
  /* display: block; */
  width: 40%;
  border: none;
  background: teal;
  color: white;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  margin: 10px 0;
  &:disabled {
    color: #c0baba;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  text-transform: uppercase;
  font-size: 12px;
  text-decoration: underline;
  margin: 5px 0;
  cursor: pointer;
`;
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user);
  // const handleLogin = e => {
  //   e.preventDefault();
  //   login(dispatch, { username, password });
  // };
  const handleLogin = async e => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await publicRequest.post('/auth/login', {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>sign in</Title>
        <Form>
          <Input
            placeholder='email'
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            Login
          </Button>
          {error && <span>Invalid Login Credentials</span>}
        </Form>
        <Link>Forgot password? Reset now!</Link>
        <Link>Create an account</Link>
      </Wrapper>
    </Container>
  );
}

export default Login;
