import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";
import { InputForm } from "@/components/InputForm";

export const metadata: Metadata = {
  title:
    "MentorMind",
  description: "MentorMind: Your Journey, Our Guidance",
};

const page = () => {
  return (
    <>
    <Breadcrumb pageName="form Page" />
    <InputForm></InputForm>
    </>
  )
}

export default page