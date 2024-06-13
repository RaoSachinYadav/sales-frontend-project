import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Orders from './components/order';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authenticated');
  return isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/order" element={<PrivateRoute> <Orders /> </PrivateRoute>} />
    </Routes>
  );
};

export default App;
