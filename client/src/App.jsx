import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import CreateNew from "./components/CreateNew";
import All from "./components/All";

function App() {
  // console.log("hello");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/create" element={<CreateNew />} />
          <Route path="/all" element={<All />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
