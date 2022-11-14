import "./App.css";
import { CardList } from "./components/Card/CardList";
import { Footer } from "./components/Footer/Footer";
// import { FiltersList } from "./components/Filters/FiltersList";
import { Navbar } from "./components/Header/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <h1>Bikes</h1>
        <div className="row">
          <CardList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
