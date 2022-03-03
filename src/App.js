import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HomePage from './components/pages/pages/HomePage';
import AboutPage from './components/pages/pages/AboutPage';
import ContactPage from './components/pages/pages/ContactPage';
import NavBar from './components/pages/Layout/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageNotFound from './components/pages/pages/PageNotFound';
import AddUser from './components/pages/user/AddUser';
import AddUserNew from './components/pages/user/AddUserNew';
import EditUser from './components/pages/user/EditUser';
import ViewUser from './components/pages/user/ViewUser';

function App() {
  return (
    <Router>
    <div >
      <NavBar />
      <Routes>
        <Route exact path = "/" element = {<HomePage />} />
        <Route exact path = "/about" element = {<AboutPage />} />
        <Route exact path = "/contact" element = {<ContactPage />} />
        <Route exact path = "/users/add" element = {<AddUserNew />} />
        <Route exact path = "/users/edit/:userId" element = {<EditUser />} />
        <Route exact path = "/users/view/:userId" element = {<ViewUser />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
