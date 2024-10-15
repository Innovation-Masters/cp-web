import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./routes/Home";

export default function App() {
  return (
    <section className="flex flex-col bg-light gap-y-14 min-h-screen">
      <Nav />
      <Home />
      <Footer />
    </section>
  )
}
