import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import Mainpage from "./pages/Mainpage";
import {  BrowserRouter, Routes , Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route  path="/" element={<Mainpage/>} />
 
      <Route  path="/sepet" element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
