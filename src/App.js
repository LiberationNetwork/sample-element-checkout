// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>
  );
}

export default App;
