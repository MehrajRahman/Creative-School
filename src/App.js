import './App.css';
import Navbar from './components/Appbar/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Home/Header/Header';
import Mission from './components/Home/Mission/Mission';
import Stories from './components/Home/Stories/Stories';
import Icon from './components/Home/Icon/Icon';
import Home from './components/Home/Home';
import RecentProject from './components/RecentProject/RecentProject';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
   <About></About>
     <RecentProject></RecentProject>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
