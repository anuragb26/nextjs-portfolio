import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

export default function Home() {
  return (
    <>
      <Header />
      <main className="col-span-1 grid grid-cols-[1fr_8fr]">
        <Sidebar />
        <Content />
      </main>
      <Footer />
    </>
  );
}
