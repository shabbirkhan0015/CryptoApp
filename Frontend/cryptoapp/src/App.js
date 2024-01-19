
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TransactionPage from './pages/Transaction/TransactionPage';
import Support from './pages/Support/Support';
import Signup from './pages/Auth/Signup/Signup';
import Signin from './pages/Auth/Signin/Signin';
import RegisterEmailVerify from './pages/Auth/RegisterEmailVerify/RegisterEmailVerify';
import RegisterSuccess from './pages/Auth/RegisterSuccess/RegisterSuccess';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import ForgotPasswordSent from './pages/Auth/ForgotPasswordSent/ForgotPasswordSent';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import ResetPasswordSuccess from './pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess';
import ProtectedRoute from './components/Auth/ProtectedRoute'; 
import AlreadySigninRoute from './components/Auth/AlreadySigninRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),

  },
  {
    path: "/transactions",
    element: (
      <ProtectedRoute>
        <TransactionPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/support",
    element: (
      <ProtectedRoute>
        <Support />
      </ProtectedRoute>
    ),
  },
  {  path: "/signup",
      element: (
        <AlreadySigninRoute>
          <Signup />
        </AlreadySigninRoute>
  ),
  },
  {  path: "/signin",
    element: (
      <AlreadySigninRoute>
        <Signin />
      </AlreadySigninRoute>
    ),
  },
  { 
    path: "/register-email-verify/:email",
    element: (
      <AlreadySigninRoute>
        <RegisterEmailVerify />
      </AlreadySigninRoute>
    ),
  },

  {  path: "/email-verify",
  element: (
    <AlreadySigninRoute>
      <RegisterSuccess />
    </AlreadySigninRoute>
  ),
  },
  {
    path: "/forgot-password",
    element: (
      <AlreadySigninRoute>
        <ForgotPassword />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/forgot-success/",
    element: (
      <AlreadySigninRoute>
        <ForgotPasswordSent />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/forgot-password-verify/:email",
    element: (
      <AlreadySigninRoute>
        <ResetPassword />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/reset-success",
    element: (
      <AlreadySigninRoute>
        <ResetPasswordSuccess />
      </AlreadySigninRoute>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;