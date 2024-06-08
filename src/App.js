
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EventsList from './components/EventsList';
import EventDetail from './components/EventDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsList />}></Route>
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
