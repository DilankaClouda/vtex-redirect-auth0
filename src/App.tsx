import { Route, Routes } from 'react-router-dom';
import SessionProvider from './context/session';
import { End } from './pages/End';
import { Home } from './pages/Home';

function App() {

  return (
    <SessionProvider>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </>
    </SessionProvider>
    
  );
}

export default App;
