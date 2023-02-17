import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {useState} from "react";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";

import initProducts from "./assets/products/products.json";
import ProductsPage from "./components/Products/ProductsPage";
import Orders from "./components/Orders/Orders";

function App() {
    const [userAuth, setUserAuth] = useState(false);
    const [users, setUsers] = useState([
        {"id": 0, "name": "admin", "password": "admin"}
    ])

    const [products] = useState(initProducts);
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header
            userAuth={userAuth}
            setUserAuth={setUserAuth}
        />
        <Routes>
            <Route
                path='/'
                element={<ProductsPage
                    userAuth={userAuth}
                    products={products}
                    setCart={setCart}
                    cart={cart}
                />}
            />
            <Route
                path='/register'
                element={<Register
                    users={users}
                    setUsers={setUsers}
                    setUserAuth={setUserAuth}
                />}
            />
            <Route
                path='/login'
                element={<Login
                    setUserAuth={setUserAuth}
                />}
            />
            <Route
                path='/cart'
                element={<Cart
                    cart={cart}
                    setCart={setCart}
                    orders={orders}
                    setOrders={setOrders}
                />}
            />
            <Route
                path='/orders'
                element={<Orders
                    orders={orders}
                />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
