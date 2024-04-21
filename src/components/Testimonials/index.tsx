import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Raghav Meattle",
    designation: "JEE AIR 21. Ph.D. Mathematics",
    content:
      "With a passion for unlocking the potential in young minds, Raghav Meattle is a seasoned IIT JEE mentor known for his personalized approach to coaching. Armed with years of teaching experience and a knack for simplifying complex concepts, he has guided numerous students to success in one of the toughest exams in the world.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Vedant Deshmukh",
    designation: "JEE AIR 211. Ph.D. Mathematics",
    content:
      "With a passion for unlocking the potential in young minds, Vedant Deshmukh is a seasoned IIT JEE mentor known for his personalized approach to coaching. Armed with years of teaching experience and a knack for simplifying complex concepts, he has guided numerous students to success in one of the toughest exams in the world..",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "Certified Chemistry Expert",
    content:
      "With a passion for unlocking the potential in young minds, Vedant Deshmukh is a seasoned IIT JEE mentor known for his personalized approach to coaching. Armed with years of teaching experience and a knack for simplifying complex concepts, he has guided numerous students to success in one of the toughest exams in the world.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="Top rated Mentors of the week!"
          paragraph="The guiding stars in the constellation of IIT JEE coaching. Driven by passion and expertise, these mentors have earned the admiration and respect of their students for their exceptional dedication and transformative impact."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
