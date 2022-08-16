import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Layouts from "./styles/Layout.module.scss";

function App() {
  return (
    <div className={`${Layouts.row}`}>
      <Navbar />
      <Header primary={"DAGO"} second={"ARTISTS"} />
    </div>
  );
}

export default App;
