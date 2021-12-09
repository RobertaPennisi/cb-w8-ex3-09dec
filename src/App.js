import prodImage from './prod-img.jpg';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <ProductCard image={prodImage}
      prodTitle="Backpack" prodPrice="34" prodParagraph="With a concept designed to be easy to underestand, RAINS bridge the gap between geography and lifestyle." 
      color1="Black" color2="Blue" color3="Yellow" color4="Grey"
      size1="S" size2="M" size3="L"
      ></ProductCard>
    </div>
  );
}


{/* <ProductCard image={prodImage}
      prodTitle="Backpack" prodPrice="34" prodParagraph="Lorem Ipsum" 
      color1="Black" color2="Blue" color3="Yellow" color4="Grey"
      size1="S" size2="M" size3="L"
      ></ProductCard> */}
export default App;
