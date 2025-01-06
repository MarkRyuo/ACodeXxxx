import './App.css'
import { BrowserRouter, Routes, Route} from "react-router";
import LandingScreen from './pages/LandingPage/LandingScreen';
import Day1 from './pages/Day1/Day1';

//* Routing 
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingScreen />}/>
        
        <Route path='/Day1' element={<Day1 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App






