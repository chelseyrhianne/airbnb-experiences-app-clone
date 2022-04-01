import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <h1>App component</h1>
    </div>
  );
}

export default App;
