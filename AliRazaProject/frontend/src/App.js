import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductsList from './components/manager/ProductsList'
import MainPage from './components/mainPage/MainPage'
import EmployList from './components/manager/EmployList'
import EnterNewEmploy from './components/manager/EnterNewEmploy'
import ManagerHome from './components/manager/ManagerHome';
import SoldProducts from './components/manager/SoldProducts';
import AdminHome from './components/admin/AdminHome';
import AdminEmploys from './components/admin/AdminEmploys';
import AdminProducts from './components/admin/AdminProducts';
import AdminSoldProducts from './components/admin/AdminSoldProducts';
import AdminLogin from './components/adminAndManager/AdminLogin';
import AdminRegister from './components/adminAndManager/AdminRegister';
import ManagerLogin from './components/adminAndManager/ManagerLogin';
import ManagerRegister from './components/adminAndManager/ManagerRegister';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/adminregister' element={<AdminRegister />} />
          <Route path='/managerlogin' element={<ManagerLogin />} />
          <Route path='/managerregister' element={<ManagerRegister />} />
          <Route path='/productslist' element={<ProductsList />} />
          <Route path='/soldproductslist' element={<SoldProducts />} />
          <Route path='/managerhome' element={<ManagerHome />} />
          <Route path='/employlist' element={<EmployList />} />
          <Route path='/enternewemploy' element={<EnterNewEmploy />} />
          <Route path='/adminhome' element={<AdminHome />} />
          <Route path='/adminemploys' element={<AdminEmploys />} />
          <Route path='/adminproducts' element={<AdminProducts />} />
          <Route path='/adminsoldproducts' element={<AdminSoldProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
