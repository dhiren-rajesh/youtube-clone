import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<div className='app_page'><Sidebar/><RecommendedVideos/></div>}/>
            <Route path="/search/:searchTerm" element={<div className='app_page'><Sidebar/><h1>Search Page</h1></div>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
