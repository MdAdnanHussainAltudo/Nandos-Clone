import "./App.css";
import BannerPanel from "./components/BannerPanel/BannerPanel";
import Carousel from "./components/Carousel/Carousel";
import CP1 from "./components/ContentPanel/CP1/CP1";
import CP2 from "./components/ContentPanel/CP2/CP2";
import FooterPanel from "./components/FooterPanel/FooterPanel";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container gx-0 p-0 m-0 w-full max-w-full">
      <Header />
      <Carousel />
      <CP1 />
      <CP2 />
      <BannerPanel />
      <FooterPanel />
    </div>
  );
}

export default App;
