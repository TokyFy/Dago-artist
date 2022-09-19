import Navbar from "./components/Navbar";
import Parallax from "./components/parallax";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const loader = document.getElementById("loadingScreen")!;
    if (loader) {
      loader.remove();
    }
  }, []);

  return (
    <>
      <Navbar />
      <Parallax />
    </>
  );
}

export default App;
