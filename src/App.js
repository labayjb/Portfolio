import './App.css';
import Header from './Header/Header';
import Nav from './nav/Nav';
import Contact from './Contact/Contact'
import Projects from './Projects/Projects';
import OnlineCourses from './Skills/OnlineCourses';
import Accomplishments from './Accomplishments/Accomplishments'

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <OnlineCourses />
        <Projects />
        <Accomplishments />
        <Contact />
    </div>
  );
}

export default App;
