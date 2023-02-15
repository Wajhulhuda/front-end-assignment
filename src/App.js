import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InsightCard from "./component/InsightCard";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/insight" element={<InsightCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
