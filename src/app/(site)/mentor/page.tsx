import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";
import { InputForm } from "@/components/InputForm";
import { CardWithForm } from "@/components/Mentor";
import { Tabledata } from "@/components/Mentor/Tabledata";

export const metadata: Metadata = {
  title: "MentorMind",
  description: "MentorMind: Your Journey, Our Guidance",
};

const MentorPage = () => {
  return (
    <>
      <Breadcrumb pageName="form Page" />
      {/* <InputForm/> */}
      <CardWithForm></CardWithForm>
      <Tabledata></Tabledata>
    </>
  );
};

export default MentorPage;
