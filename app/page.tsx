import BackgroundBeamsDemo from "../components/background-beams-demo"
import PortfolioProjects from "../components/portfolio-projects"
import Testimonials from "../components/testimonials"
import Navbar from "../components/navbar"
import Pricing from "../components/pricing"
import FAQSection from "../components/faq-section"
import BottomSection from "../components/bottom-section"

export default function Page() {
  return (
    <main className="pb-20 md:pb-0">
      <Navbar />
      <BackgroundBeamsDemo />
      <div id="work">
        <PortfolioProjects />
      </div>
      <Testimonials />
      <Pricing />
      <FAQSection />
      <BottomSection />
    </main>
  )
}
