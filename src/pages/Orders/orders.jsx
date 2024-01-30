import React, { useState } from "react";
import "./orders.css";
import imgOne from "../../images/menu4.png";

const Orders = () => {
  const [countCappuccino1, setCountCappuccino1] = useState(1);
  const [countCappuccino2, setCountCappuccino2] = useState(1);

  function decreaseCappuccino1() {
    if (countCappuccino1 > 1) {
      setCountCappuccino1(countCappuccino1 - 1);
    }
  }

  function increaseCappuccino1() {
    setCountCappuccino1(countCappuccino1 + 1);
  }

  function decreaseCappuccino2() {
    if (countCappuccino2 > 1) {
      setCountCappuccino2(countCappuccino2 - 1);
    }
  }

  function increaseCappuccino2() {
    setCountCappuccino2(countCappuccino2 + 1);
  }

  return (
    <section id="orders">
      <div className="container">
        <div className="orders">
          <h1>MY ORDERS</h1>
          <div className="ordersTwo">
            <img src={imgOne} alt="" />
            <div className="text">
              <h3>cappuccino</h3>
              <p>10.5$</p>
            </div>
            <div className="delete">
              <button className="delBtn" onClick={decreaseCappuccino1}>
                delete order
              </button>
              <div className="counter">
                <button className="min" onClick={decreaseCappuccino1}>
                  -
                </button>
                <h1>{countCappuccino1 + "x"}</h1>
                <button className="pul" onClick={increaseCappuccino1}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="ordersTwo">
            <img src={imgOne} alt="" />
            <div className="text">
              <h3>cappuccino</h3>
              <p>10$</p>
            </div>
            <div className="delete">
              <button className="delBtn" onClick={decreaseCappuccino2}>
                delete order
              </button>
              <div className="counter">
                <button className="min" onClick={decreaseCappuccino2}>
                  -
                </button>
                <h1>{countCappuccino2 + "x"}</h1>
                <button className="pul" onClick={increaseCappuccino2}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
