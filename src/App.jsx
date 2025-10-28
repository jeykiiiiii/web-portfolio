import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ThemeBackground from "./components/ThemeBackground";

function App() {
  console.log('App component rendered'); 
  
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ThemeBackground />
      <Header />
      <main className="relative z-10">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;