import { CallToAction } from "../components/CallToAction";
import { Faqs } from "../components/Faqs";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { SecondaryFeatures } from "../components/SecondaryFeatures";
import { Story } from "../components/Story";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Faqs />
        <CallToAction />
        <SecondaryFeatures />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
