import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./component/ProductList.js";
import AddProduct from "./component/AddProduct.js";
import EditProduct from "./component/EditProduct.js";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
