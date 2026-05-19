import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import B2BPartners from "./components/B2BPartners";
import Proof from "./components/Proof";
import HowToStart from "./components/HowToStart";
import Comparison from "./components/Comparison";
import Result from "./components/Result";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <Products />
        <Benefits />
        <B2BPartners />
        <Proof />
        <HowToStart />
        <Comparison />
        <Result />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
