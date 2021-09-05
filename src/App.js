import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about'  component={About} />
        <Route path='/contact'  component={Contact} />
        <Route path='/menu'  component={Menu} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
