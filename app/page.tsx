import Hero from "@/components/Hero";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col gap-6 w-full h-full max-w-7xl mx-auto px-4 lg:px-24 py-8">
      <Navbar />
      <Hero />
    </section>
  );
}
