import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import BarChart from './charts/barchart';
import PieAgeChart from './charts/pieagechart';
import PieModelChart from './charts/piemodelchart';
import UserList from './lists/userlist';
import CarList from './lists/carlist';
import reportWebVitals from './reportWebVitals';
import Data from './data/data';
import PackagesUsed from './source/packagesused';
import References from './source/references';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
const { combinedArray,carsArray} = Data();
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/references" element={<References />} />
      <Route path="/packagesused" element={<PackagesUsed/>} />
      <Route path="/barchart" element={<BarChart combinedArray={combinedArray} />} />
      <Route path="/pieagechart" element={<PieAgeChart combinedArray={combinedArray} />} />
      <Route path="/piemodelchart" element={<PieModelChart combinedArray={combinedArray} />} />
      <Route path="/userlist" element={<UserList combinedArray={combinedArray} />} />
      <Route path="/carlist" element={<CarList combinedArray={combinedArray} carsArray={carsArray} />} />
    </Routes>
  </Router>
);
reportWebVitals();
