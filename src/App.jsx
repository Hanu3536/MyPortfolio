import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Intro } from "./components/Intro/Intro";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import ReactGA from 'react-ga';

ReactGA.initialize('G-M4TSKB8D72');

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;