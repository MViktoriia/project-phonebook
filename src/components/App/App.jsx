import Layout from "components/Layout/Layout";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getCurrentUser } from "redux/auth/authOperations";
import { getLoadingUserStatus } from "redux/auth/authSelectors";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const SignupPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));


export const App = () => {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);


  return isLoadingUser ? (<b>Loading user...</b>) : (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute component={SignupPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
      </Route>
    </Routes>

  );
};
