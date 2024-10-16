import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <section className="flex flex-col bg-light gap-y-14 min-h-screen">
      <Nav />
      <Outlet/>
      <Footer />
    </section>
  )
}
