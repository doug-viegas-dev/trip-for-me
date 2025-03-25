import "./styles/index.scss";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import 'swiper/css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
