import Avatar from './components/Avatar';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import './index.css';

function App() {
  return (
    <>
      <Avatar />
      <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
