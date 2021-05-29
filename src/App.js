import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/footer.css";
import NavBar from "./components/navBar";
import QuantityPicker from "./components/quantityPicker";
function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
      <h1>Hello from React !!!</h1>
      <Footer></Footer>
    </div>
  );
}
export default App;
