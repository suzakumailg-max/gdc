import Header from "./components/Layout/Header/Header.jsx";
import Menu from "./Pages/Menu.jsx";
import Top from "./Pages/Top.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}