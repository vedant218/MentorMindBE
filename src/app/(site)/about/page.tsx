import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MentorMind",
  description: "MentorMind: Your Journey, Our Guidance",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName= "Schedule Your daily Studying!"
       />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
