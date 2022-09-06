import './App.css';
import Header from './Header/Header';
import Nav from './nav/Nav';
import Contact from './Contact/Contact'
import Projects from './Projects/Projects';
import OnlineCourses from './Skills/OnlineCourses';
import Accomplishments from './Accomplishments/Education'
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <Accomplishments />
        <OnlineCourses />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
