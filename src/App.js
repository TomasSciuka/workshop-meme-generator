import "./styles.css";
import Header from "./components/Header/Header";
import MemeGenerator from "./containers/MemeGenerator/MemeGenerator";

const App = () => {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
};

export default App;
