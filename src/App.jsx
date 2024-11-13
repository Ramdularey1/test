import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './Content';
import Home from './Home';
import Page from './Page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        {/* Dynamic route to handle :id */}
        <Route path="/content/:id" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
