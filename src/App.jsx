import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './Content';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
