import {Navbar, NavbarBrand} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <div className="container">
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
