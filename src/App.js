import {
  Header,
  Features,
  Blog,
  WhatGPT3,
  Possibility,
  Footer,
} from "./containers/index";
import { Navbar, Brand, CTA } from "./components/index";

function App() {
  return (
    <main className="App">
      <header className="gradient__bg">
        <Navbar />
        <Header />
      </header>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
