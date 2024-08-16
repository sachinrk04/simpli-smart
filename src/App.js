import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import ModelSpacePage from "./pages/ModelSpacePage/ModelSpacePage";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/model-space/:id" element={<ModelSpacePage />} />
      </Routes>
    </>
  );
}

export default App;
