
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import FarmerRegistration from './components/FarmerRegistration';
import FarmerDashboard from './components/FarmerDashboard';
import FAQ from './components/FAQ'
 import AboutUsPage from './components/AboutUsPage';
import AllProducts from './components/AllProducts';
import Displayfarmer from './components/Displayfarmer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/farmer-registration" element={<FarmerRegistration />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
        <Route path="/faq" element={<FAQ />} /> { }
        <Route path="/AboutUsPage" element={<AboutUsPage />} />{ }
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/farmerslist" element={<Displayfarmer />} />




      </Routes>
    </Router>
  );
}

export default App;