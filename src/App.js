import './App.css';
import Header from './components/common/heading/Header';
import Home from "./components/home/Home";
import About from "./components/about/About";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Price from './components/pricing/Price';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>

<BrowserRouter>
<Header />
<Routes>

<Route path="/" exact element={<Home />}></Route>
<Route path="/about" exact element={<About />}></Route>
<Route path="/courses" exact element={<CourseHome />}></Route>
<Route path="/team" exact element={<Team />}></Route>
<Route path="/pricing" exact element={<Price />}></Route>
<Route path="/contact" exact element={<Contact />}></Route>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
