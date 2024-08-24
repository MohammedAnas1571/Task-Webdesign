import { BrowserRouter } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="overflow-x-hidden bg-white text-black">
          <NavBar />
          <Banner />
          <ProductList />
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
