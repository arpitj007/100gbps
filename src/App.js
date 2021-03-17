import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import About from './components/About/About';
import ContactDetails from './components/Contact/ContactDetails';
import ContactHeader from './components/Contact/ContactHeader';
import Servers from './components/DedicatedServers/Servers';
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
          <Route exact path="/">
            <Banner />
            <Filler1 />
            <Vendors />
            <DedicatedServer />
            <Filler2 />
            <Pricing />
            <WhyUs />
            <Testimonials />
            <Coverage />
          </Route>
          <Route path="/contact">
            <ContactHeader />
            <ContactDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/reseller-program">
            <Servers />
          </Route>
          
        </Switch>
        <TryUs />
        <Footer />
    </Router>
    </>
  );
}

export default App;
