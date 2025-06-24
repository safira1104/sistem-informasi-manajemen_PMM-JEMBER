import AboutUsSection from "@/components/sections/about-us-section";
import TopDestinationSection from "@/components/sections/top-destination-section";
import WelcomeSection from "@/components/sections/welcome-section";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <WelcomeSection />
      <AboutUsSection />
      <TopDestinationSection />
    </main>
  );
}
