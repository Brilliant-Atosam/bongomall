// import Cart from './pages/Cart';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Product from './pages/Product';
// import ProductList from './pages/ProductList';
// import Register from './pages/Register';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from 'react-router-dom';
// import { Success } from './pages/Success';
// import { useSelector } from 'react-redux';

// function App() {
//   const user = useSelector((state) => state.user.currentUser);

//   return (
//     <Router>
//       <div className='App'>
//         <Switch>
//           <Route path='/' exact>
//             <Home />
//           </Route>
//           <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
//           <Route path='/register'>
//             {user ? <Redirect to='/' /> : <Register />}
//           </Route>
//           <Route path='/cart'>
//             <Cart />
//           </Route>
//           <Route path='/success'>
//             <Success />
//           </Route>
//           <Route path='/products/:category'>
//             <ProductList />
//           </Route>
//           <Route path='/product/:id'>
//             <Product />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Adnav from './components/Adnav';
import PartNav from './components/PartNav';
import Regnav from './components/Regnav';

export default function App() {
  const admin = true;
  const part = false;
  const reg = false;
  return (
    <>
      {admin && <Adnav />}
      {reg && <Regnav />}
      {part && <PartNav />}
    </>
  );
}
