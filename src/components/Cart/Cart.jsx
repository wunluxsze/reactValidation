import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import './style.css';
const Cart = ({ cart, setCart, orders, setOrders }) => {
  const removeItem = (item) => {
    setCart(cart.filter((x) => x.product.id !== item.product.id));
  };

  const navigate = useNavigate();

  const getPrice = () => {
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
      price += cart[i].price;
    }
    return price;
  };

  const makeOrder = () => {
    const id = orders.length === 0 ? 0 : orders.at(-1).id + 1;
    setOrders([...orders, { title: `Order ${id + 1}`, id: id, price: getPrice() }]);
    setCart([]);
    navigate('/orders');
  };

  return (
    <div>
      <div>
        <Link to="/">На главную</Link>

        {cart.map((item) => {
          return (
            <div>
              <div>
                <h2>{item.product.title}</h2>
                <p>Кол-во: {item.quantity}</p>
                <p>Цена: {item.price} руб.</p>
              </div>
              <button onClick={() => removeItem(item)}>X</button>
            </div>
          );
        })}
        {cart.length == 0 && <p>Корзина пуста</p>}
        {cart.length > 0 && <button onClick={makeOrder}>Make order</button>}
      </div>
    </div>
  );
};

export default Cart;
