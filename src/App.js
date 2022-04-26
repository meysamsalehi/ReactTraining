import "./App.css";
import ProductList from "./Component/ProductList/ProductList";
import NavBar from "./Component/NavBar/Navbar";
import ProductsProvider from "./Component/ProductsProvider/ProductsProvider";

const App = () => {
  return (
    <ProductsProvider>
      <div className="container">
        <NavBar />
        <ProductList />
      </div>
    </ProductsProvider>
  );
};

export default App;
