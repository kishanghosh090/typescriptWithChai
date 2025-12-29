import "./App.css";
import { ChaiCard } from "./components/ChaiCard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ChaiCard name="alychi" price={12} isSpecial={false} />
      <ChaiCard name="alychi" price={12} isSpecial={true} />
    </>
  );
}

export default App;
