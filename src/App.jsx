import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./modules/layouts/header";
import Home from "./modules/pages/home";
import Footer from "./modules/layouts/footer";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="w-full h-full relative">
        <main style={{ margin: "0px" }}>
          <div style={{ width: "calc(100%)" }}>
            <Header />
            {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
            {/* <Home /> */}

            <Outlet />

            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
