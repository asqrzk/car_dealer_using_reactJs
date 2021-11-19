import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalogue from './components/Catalogue';
import WithNavigateAddCar from './components/AddCar';

 
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route  path='/' element={<Catalogue/>}></Route>
        <Route  path='/add' element={<WithNavigateAddCar/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
