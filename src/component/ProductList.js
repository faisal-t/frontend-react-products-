import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProduct(response.data);
  };

  const deleteProduct = async(id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProduct();
  }
  return (
    <div>
        <Link className="button is-primary" to="/add">Add New Product</Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {Product.map((product,index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
