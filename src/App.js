import Experience from "./assets/portfolio/Experience";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold font-signature">Hello</h1> */}
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
    </div>
  );
}

export default App;
