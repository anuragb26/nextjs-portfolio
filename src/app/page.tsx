import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" bg-blue-300 col-span-1 grid grid-cols-[1fr_9fr]">
        <section className="sidebar bg-green-50">Sidebar</section>
        <section className="content bg-yellow-50">Content</section>
      </main>
      <Footer />
    </>
  );
}
