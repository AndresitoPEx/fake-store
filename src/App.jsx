import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from './Context';


import Home from './Pages/Home';
import SingIn from './Pages/SingIn';
import NotFound from './Pages/NotFound';
import MyOrders from './Pages/MyOrders';
import Order from './Pages/My-order';
import MyAcount from './Pages/MyAcount';

import Nav from './Components/Nav';
import CheckOutMenu from './Components/CheckOutMenu';

import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sing-in', element: <SingIn /> },
    { path: '/my-orders', element: <MyOrders /> },  
    { path: '/my-orders/last', element: <Order /> },
    { path: '/my-orders/:id', element: <Order /> },
    { path: '/my-acount', element: <MyAcount /> },
    { path: '*', element: <NotFound /> }

  ])
  return routes;
}


const App = () => {
  return (
    <div className="bg-gray-500">
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Nav />
          <CheckOutMenu />
        </BrowserRouter>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
