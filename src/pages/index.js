import AboutUs2 from "../components/About-Us2";
import Services2 from "../components/Services2";
import Portfolio2 from "../components/Portfolio2";
import Testimonials1 from "../components/Testimonials1";
import IntroWithVertical from "../components/Intro-with-vertical";
import Process from "../components/Process";
import LightLayout from "../layouts/light";
import Services1 from "../components/Services1";
export default function Home() {
  return (
    <LightLayout>
      <IntroWithVertical />
      <Services2 />
      <AboutUs2 />
      <Portfolio2 />
      <Services1 />
      <Process />
      <Testimonials1 />
    </LightLayout>
  );;
}
