import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionFeature from "./components/SectionFeature";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-0 py-10">
        <Hero />
        <SectionFeature />
      </main>
    </>
  );
}

export default App;
