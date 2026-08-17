import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import AICallAgent from './pages/AICallAgent.jsx';
import FireGuardVR from './pages/FireGuardVR.jsx';
import Products from './pages/Products.jsx';
import BusDriver from './pages/BusDriver.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AICallAgent />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/ai-call-agent" element={<AICallAgent />} />
          <Route path="/products/fireguard-vr" element={<FireGuardVR />} />
          <Route path="/products/bus-driver-management" element={<BusDriver />} />
          <Route path="*" element={<AICallAgent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;