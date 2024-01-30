import React from "react";
import "./admin.css";

const Admin = () => {
  return (
    <div>
      <div id="admin">
        <div className="container">
          <div class="box">
            <div class="main-box">
              <h1>Create Product</h1>
              <div class="box-input">
                <input class="name" type="text" placeholder="Image URL..." />
              </div>
              <div class="box-input">
                <input class="lastName" type="text" placeholder="Food name" />
              </div>
              <div class="box-input">
                <input class="image" type="text" placeholder="Price" />
              </div>
              <button class="create">create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
