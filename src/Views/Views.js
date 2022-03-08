import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import MoreDetails from '../components/pages/MoreDetails';

const Views = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="/more-details" element={<MoreDetails />} />
  </Routes>
);

export default Views;
