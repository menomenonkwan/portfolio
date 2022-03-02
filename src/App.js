import { BrowserRouter, Routes, Route } from 'react-router-dom';

// comonents
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home/Home';

// styles
import './styles/App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
