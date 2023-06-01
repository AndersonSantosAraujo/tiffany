import { MinicartStorage } from "./components/Minicart/MinicartContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const Router = () => {
  return (
    <MinicartStorage>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MinicartStorage>
  );
};

export default Router;
