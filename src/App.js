import Product from "./Component/Product/Product";

const App = () => {
  return (
    <div className="container" id="title">
      <h1>shopping App</h1>
      <Product name="react js" price="90$" />
      <Product name="node js" price="70$" />
      <Product name="java script" price="80$">
        {" "}
        15%{" "}
      </Product>
    </div>
  );
};

export default App;

export const userName = "meysam";
export const lastName = "salehi";
