import './App.css';
import Navegator from './components/navegator/navegator';
import Me from './components/me/me';
import AboutMe from './components/about me/aboutMe';
import Skills from './components/skills/skills';

function App() {
  return (
    <div id='app-container'>
      <Navegator />
      {/* <Me /> */}
      {/* <AboutMe /> */}
      <Skills />
    </div>
  );
}

export default App;
