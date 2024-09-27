import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Root from "./Pages/Root";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Learn from "./Pages/Learn"
import Contact from "./Pages/Contact";
import Companies from "./Pages/Companies";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root/>}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/learn" element={<Learn/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/companies" element={<Companies/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
