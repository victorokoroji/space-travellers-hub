import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<Rockets />}/>
        <Route path='/missions' exact element={<Missions />}/>
      </Routes>
    </div>
  );
}

export default App;
