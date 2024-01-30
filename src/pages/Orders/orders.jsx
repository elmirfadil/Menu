import React, { useState } from "react";
import "./orders.css";
import imgOne from "../../images/menu4.png";
import imgTwo from "../../images/menu3.png";

const Orders = () => {
  const [countCappuccino, setCountCappuccino] = useState(0);
  const [countSushi, setCountSushi] = useState(0);

  function decreaseCappuccino() {
    if (countCappuccino > 0) {
      setCountCappuccino(countCappuccino - 1);
    }
  }

  function increaseCappuccino() {
    setCountCappuccino(countCappuccino + 1);
  }

  function decreaseSushi() {
    if (countSushi > 0) {
      setCountSushi(countSushi - 1);
    }
  }

  function increaseSushi() {
    setCountSushi(countSushi + 1);
  }

  return (
    <section id="orders">
      <div className="container">
        <div className="orders">
          <div className="ordersOne">
            <h1>MY ORDERS</h1>
            <div className="ordersTwo">
              <img src={imgOne} alt="" />
              <div className="text">
                <h3>cappuccino</h3>
                <p>10.5$</p>
              </div>
              <div className="delete">
                <button className="delBtn" onClick={decreaseCappuccino}>
                  delete order
                </button>
                <div className="pulus">
                  <button className="min" onClick={decreaseCappuccino}>
                    -
                  </button>
                  <h1>{countCappuccino + "x"}</h1>
                  <button className="pul" onClick={increaseCappuccino}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="ordersTwo">
              <img src={imgTwo} alt="" />
              <div className="text">
                <h3>sushi and rolls</h3>
                <p>12.5$</p>
              </div>
              <div className="delete">
                <button className="delBtn" onClick={decreaseSushi}>
                  delete order
                </button>
                <div className="pulus">
                  <button className="min" onClick={decreaseSushi}>
                    -
                  </button>
                  <h1>{countSushi + "x"}</h1>
                  <button className="pul" onClick={increaseSushi}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
