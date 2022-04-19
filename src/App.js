import Product from "./Component/Product/Product";

const App = () => {
  return (
    <div className="container" id="title">
      <h1>shopping App</h1>
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default App;

export const userName = "meysam";
export const lastName = "salehi";
