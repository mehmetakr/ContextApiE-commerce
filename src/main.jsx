import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BasketProvider } from "./context/Basketcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
/* 
* Provider : sağlayıcı
Bütün uygulamayı sarmalayacak şekilde konumlandırırız
* Bu sayede uygulamanın içerisindeki bütün bileşenler sağlayıcının  value'sunda tanımlanan değerlere erişebiliriz.
*/

  <BasketProvider>
    <App />
  </BasketProvider>
);
