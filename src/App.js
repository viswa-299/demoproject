import "./App.css";
import Header from "./Compoenets/Header/Header";
import Hero from "./Compoenets/Hero/Hero";
import Slider from "./Compoenets/Slider/Slider";
import Virtual from "./Compoenets/Virtual/Virtual";
import Products from "./Compoenets/Products/Products";
import Review from "./Compoenets/Review/Review";
import Footer from "./Compoenets/Footer/Footer";
function App() {
  return (
    <div className="App">
       <Header/>
       <Hero/>
       <Slider/>
       <Virtual/>
       <Products/>
       <Review/>
       <Footer/>
    </div>
  );
}

export default App;
