import ProductList from "./Component/ProductList/ProductList";
import NavBar from "./Component/NavBar/Navbar";
import ProductsProvider from "./Component/ProductsProvider/ProductsProvider";
import Filter from "./Component/Filter/Filter";
import SearchBar from "./common/SearchBar/SearchBar";

const App = () => {
  return (
    <ProductsProvider>
      <div className="container">
        <Filter />
        <SearchBar />
        <NavBar />
        <ProductList />
      </div>
    </ProductsProvider>
  );
};

export default App;
