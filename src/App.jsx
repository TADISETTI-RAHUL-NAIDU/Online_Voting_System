import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import UserLoginRegister from './components/UserLoginRegister';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import AdminSideNavbar from './components/AdminSideNavbar';
import UserSidebar from './components/UserSidebar';
import ViewAllusers from './components/ViewAllusers';
import AddElection from './components/AddElection';
import ViewAllElections from './components/ViewAllElections';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/UserLoginRegister" element={<UserLoginRegister />} />
      <Route path="/userDashboard" element={<UserDashboard />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />
      <Route path="/AdminSideNavbar" element={<AdminSideNavbar/>} />
      <Route path="/UserSidebar" element={<UserSidebar />} />
      <Route path="/ViewAllusers" element={<ViewAllusers />} />
      <Route path="/AddElection" element={<AddElection/>} />
      <Route path="/ViewAllElections" element={<ViewAllElections/>} />
    </Routes>
  );
}

export default App;
