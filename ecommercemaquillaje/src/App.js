import logo from "./logo.svg";
import "./App.css";
import Header from "./componentes/Header/Header";
import Navbar from "./componentes/Navbar/Navbar";
import Logo from "./componentes/Logo/Logo";
import Banner from "./componentes/Banner/Banner";
import Categorias from "./componentes/Categorias/Categorias";
import ProductosDest from "./componentes/ProductosDest/ProductosDest";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="container">
        <Logo />
        <Banner />
        <Categorias />
        <ProductosDest/>
      </div>
    </div>
  );
}

export default App;
