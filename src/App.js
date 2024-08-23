import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './components/profile';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/member1" element={<Profile member="member1" />} />
          <Route path="/member2" element={<Profile member="member2" />} />
          <Route path="/member3" element={<Profile member="member3" />} />
          <Route path="/member4" element={<Profile member="member4" />} />
          <Route path="/" element={<Profile member="member1" />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;