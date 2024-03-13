import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index';
import Contact from './Pages/Contact';
import { About } from './Pages/About';
import Post from './Pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/post" element={<Post />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
