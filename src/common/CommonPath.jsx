import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import Layout from '../common/Layout'

import MobileWeighing from '../pages/login/sections/MobileWeighing'
import AboutService from '../pages/login/sections/AboutService'
import VideoPresentation from '../pages/login/sections/VideoPresentation'
import Support from '../pages/login/sections/Support'

import OperatorWeighing from '../components/OperatorWeighing'
import Reports from '../components/Reports'
import Companies from '../components/Companies'
import Contacts from '../components/Contacts'
import Weighings from '../components/Weighings'
import Orders from '../components/Orders'
import WeighingCodes from '../components/WeighingCodes'
import Products from '../components/Products'
import TransportUnits from '../components/TransportUnits'
import Assets from '../components/Assets'

const CommonPath = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/mobile-weighing" element={<MobileWeighing />} />
        <Route path="/about-service" element={<AboutService />} />
        <Route path="/video-presentation" element={<VideoPresentation />} />
        <Route path="/support" element={<Support />} />

        {/* Protected / Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/operator-weighing" element={<OperatorWeighing />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/companies" element={<Companies />} />
          <Route path="/dashboard/contacts" element={<Contacts />} />
          <Route path="/dashboard/weighings" element={<Weighings />} />
          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/dashboard/weighing-codes" element={<WeighingCodes />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/transport-units" element={<TransportUnits />} />
          <Route path="/dashboard/assets" element={<Assets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default CommonPath
