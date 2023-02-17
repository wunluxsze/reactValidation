import React from 'react';
import { Link } from 'react-router-dom';

const Orders = ({ orders }) => {
  return (
    <div>
      <div>
        <Link to="/">На главную</Link>
        {orders.map((item) => {
          return (
            <div>
              <h2>{item.title}</h2>
              <p>{item.price} руб.</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
