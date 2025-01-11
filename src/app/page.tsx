import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServicesSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className="bg-white">
      <main className="flex min-h-screen flex-col bg-white container mx-auto py-4 px-4 sm:px-6 lg:px-12">
        <Navbar />
        <div className="container mx-auto mt-24 px-4 sm:px-6 lg:px-12 py-4 w-full sm:w-10/12 lg:w-full">
          <HeroSection />
          <AboutSection />
          <ServiceSection />
          <ProjectSection />
          <EmailSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
