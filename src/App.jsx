import './App.css'
import { BrowserRouter, Routes, Route} from "react-router";
import LandingScreen from './screens/LandingScreen';

//* Routing 
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingScreen />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
