import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MissionsPage from './pages/MissionsPage'
import Rockets from './pages/Rockets';
import Profile from './pages/Profile';
import missionServices from './redux/services/missionServices'

console.log(missionServices.getMissionLists())
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Rockets />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
