import "./App.css";
import ProductList from "./Component/ProductList/ProductList";
import NavBar from "./Component/NavBar/Navbar";
import ProductsProvider, {
  useProducts,
  useProductsAction,
} from "./Component/ProductsProvider/ProductsProvider";

const App = () => {
  const products = useProducts();
  const setProducts = useProductsAction();

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
