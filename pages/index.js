import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import About from "../components/About";
import Portrait from "../components/Portrait";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Main() {
  return (
    <div>
      <Head>
        <title>Mike Ploythai</title>
      </Head>

      <Header />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Portrait />
      <Contact />
      <Footer />
    </div>
  );
}
