import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails'; // Import the ProductDetails component
import Footer from './components/Footer';
import Navbar from './components/NavBar'; // Import the Navbar component
import './index.css'; // Import your CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Add the Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;