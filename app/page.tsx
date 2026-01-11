import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import GlobalHeatmap from "@/components/GlobalHeatmap";
import TimeTaxCalculator from "@/components/TimeTaxCalculator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <GlobalHeatmap />
      <TimeTaxCalculator />
      <Footer />
    </main>
  );
}
