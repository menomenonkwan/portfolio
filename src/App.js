import './styles/App.css';
import './styles/mobile.css';
import './styles/portfolio.css';
import { Switch, Route, useLocation } from "react-router-dom";
import background from './components/assets/images/background_image.jpg';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';
import { AnimatePresence } from 'framer-motion';
import BurgerMenu from './components/layout/BurgerMenu';

function App() {
  const location = useLocation();

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <AnimatePresence initial={false}> 
        <BurgerMenu />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home}/>
          <Route path="/portfolio" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
