import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import ParticlesComponent from './components/particles';

function App() {
  return (
    <MyProvider>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} /> {/* Change the path for AboutPage */}
      </Routes >
      <ParticlesComponent id='particles'/> {/* Move ParticlesComponent inside the return statement */}
    </MyProvider>
  );
}

export default App;
