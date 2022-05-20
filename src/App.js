import {Navbar, NavbarBrand} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import MenuComponent from './components/MenuComponent';

function App() {
  return (
    <>
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <div className="container">
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
        </div>
      </Navbar>
      
    </div>
    <MenuComponent/>
    </>
  );
}

export default App;
