import React from "react";
import "./menu.css";
import shaurma from "../../images/menu1.png";
import salat from "../../images/menu2.png";
import sushi from "../../images/menu3.png";
import cappuccino from "../../images/menu4.png";

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { BiSolidBasket } from "react-icons/bi";

function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <div className="menu">
          <h1>MENU</h1>
          <div className="box">
            <div className="menuTwo">
              <img src={shaurma} alt="" />
              <div className="block">
                <h3>shawarma</h3>
                <div className="icons">
                  <p>5$</p>
                  <div className="divOne">
                    <span>
                      <FaRegEdit />
                    </span>
                  </div>
                  <div className="divTwo">
                    <span>
                      <MdDeleteOutline />
                    </span>
                  </div>
                  <div className="divThree">
                    <span>
                      <BiSolidBasket />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="menuTwo">
              <img src={salat} alt="" />
              <div className="block">
                <h3>salad</h3>
                <div className="icons">
                  <p>10$</p>
                  <div className="divOne">
                    <span>
                      <FaRegEdit />
                    </span>
                  </div>
                  <div className="divTwo">
                    <span>
                      <MdDeleteOutline />
                    </span>
                  </div>
                  <div className="divThree">
                    <span>
                      <BiSolidBasket />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="menuTwo">
              <img src={sushi} alt="" />
              <div className="block">
                <h3>sushi and rolls</h3>
                <div className="menuBtn">
                  <p>12.5$</p>
                  <button className="BtnOrders"> to order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
