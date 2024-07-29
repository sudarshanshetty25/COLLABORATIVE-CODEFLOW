import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import home from './pages/home';
import editorPage from './pages/editorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<home/>} />
          <Route path="/editor/:roomId" element={<editorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
