import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Services from './componats/Services';
import Solutions from './componats/Solutions';
import Portfolio from './componats/Portfolio';
import News from './componats/News';
import Contact_us from './componats/Contact_us';
import Homemane from './componats/Home/Homemane';
import About from './componats/Home/About/About';
import IntersectionObserverComponent from './componats/Home/IntersectionObserverComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homemane />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Solutions" element={<Solutions/>}></Route>
        <Route path="/Portfolio" element={<Portfolio/>}></Route>
        <Route path="/News" element={<News/>}></Route>
        <Route path="/Contact_us" element={<Contact_us/>}></Route>
      </Routes>
    </BrowserRouter>
  // <IntersectionObserverComponent/>
  );
}

export default App;
