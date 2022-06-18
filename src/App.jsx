import "./App.scss";

import { Section1, Section2, Section3, Section4, Section5, Section6 } from "./Sections";
import { Navbar, Footer } from "./component";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
};

export default App;
