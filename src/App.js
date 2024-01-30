import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Menu from "./pages/Menu/menu";
import Orders from "./pages/Orders/orders";
import Admin from "./pages/Admin/admin";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
