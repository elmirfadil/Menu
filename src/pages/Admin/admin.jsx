import React from "react";
import "./admin.css";

const Admin = () => {
  return (
    <div>
      <div id="admin">
        <div className="container">
          <div class="admin"> 
            <h1>CREATE PRODUCT</h1></div>
              <div class="box-input">
                <input class="name" type="text" placeholder="Image URL..." />
              </div>
              <div class="box-input">
                <input class="lastName" type="text" placeholder="Food name" />
              </div>
              <div class="box-input">
                <input class="image" type="text" placeholder="Price" />
              </div>
              <div className="create">
              <button>create</button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
