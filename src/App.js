import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import News from "./Components/News";
import Partners from "./Components/Partners";
import Sections from "./Components/Sections";
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <div className="App-wrap">
        <Header />
        <Intro />
        <Partners />
        <Sections />
        <News />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
