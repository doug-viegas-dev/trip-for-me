import "./styles/index.scss";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <main>
        <Header />
        <Home />
      </main>
    </>
  );
}

export default App;
