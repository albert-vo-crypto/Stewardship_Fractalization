import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Sponsors from "@/components/Sponsors";
import Collaborate from "@/components/Collaborate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="flex flex-col w-full items-center pt-8 pb-4">
        <div className="container">
          <Nav />
          <Hero />
        </div>
        <Description />
        <Sponsors />
        <Collaborate />
        <Footer />
      </div>
    </div>
  );
}
