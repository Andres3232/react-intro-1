//import logo from '../assets/image/logo.svg';
import '../assets/css/App.css'
import { Footer } from './Footer';
import { Home } from './Home';
import { Navbar } from './Navbar';

function App() {
  return (

    <>

      <Navbar links ={[
        { text: 'Home', url: '/'},
        { text: 'Services', url: '/services'},
        { text: 'Products', url: '/products'},
        { text: 'Contacts', url: '/contact'},
      ]}/>
      <Home />

      <Footer >

        <h2>Hola soy el h2 del footer</h2>

        <Navbar links ={[
          { text: 'Home', url: '/'},
          { text: 'Services', url: '/services'},
        ]}/>
      </Footer>

    </>
  );
}

export default App;
