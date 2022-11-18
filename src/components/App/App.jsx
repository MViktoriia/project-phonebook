// import { Phonebook } from '../Phonebook'; 
// import { Wrapper } from './App.styled';

import Layout from "components/Layout/Layout";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import SignupPage from "pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>

  );
};
