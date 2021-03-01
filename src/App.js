import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Banner from './components/Home/Banner';
import Coverage from './components/Home/Coverage';
import DedicatedServer from './components/Home/DedicatedServer';
import Filler1 from './components/Home/fillers/Filler1';
import Filler2 from './components/Home/fillers/Filler2';
import Pricing from './components/Home/Pricing';
import Testimonials from './components/Home/Testimonials';
import TryUs from './components/Home/TryUs';
import Vendors from './components/Home/Vendors';
import WhyUs from './components/Home/WhyUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route to="/">
              <Banner />
              <Filler1 />
              <Vendors />
              <DedicatedServer />
              <Filler2 />
              <Pricing />
              <WhyUs />
              <Testimonials />
              <Coverage />
              <TryUs />
          </Route>
        </Switch>
        <Switch>
          <Route path="/" exact />
        </Switch>
        <Footer />
    </Router>
    </>
  );
}

export default App;
