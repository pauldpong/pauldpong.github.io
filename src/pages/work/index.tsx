import Header from "components/common/Header";
import Scaffold from "components/common/Scaffold";
import Head from "next/head";
import type { GetStaticProps } from "next";
import Retrivers from "posts/retrievers";

interface WorkPageProps {
  experience: WorkExperienceProps[];
  education: EducationProps[];
}

export default function Work({ experience, education }: WorkPageProps) {
  return (
    <div>
      <Head>
        <title>Paul&apos;s Work</title>
      </Head>
      <Scaffold>
        <div className="grid grid-cols-1 gap-1">
          <Header headerTitle="PAUL'S WORK" />
          <p className="font-sans mb-10">
            Brief overview of my career and education background. You can view
            my full resume{" "}
            <a className="underline" href="/files/resume-july-2025.pdf">
              here
            </a>
            .
          </p>
          <div className="grid grid-cols-[1fr_max-content_4fr] gap-x-5">
            {experience.map((entry, index) => (
              <WorkExperience key={index} {...entry} />
            ))}
            <div className="col-span-2" />
            <div className="mt-10 mb-2">
              <h1 className="text-2xl">Education</h1>
              <hr className="border-b-1 border-solid border-black w-auto sm:w-2xs" />
            </div>
            {education.map((entry, index) => (
              <EducationExperience key={index} {...entry} />
            ))}
          </div>
        </div>
      </Scaffold>
    </div>
  );
}

export const getStaticProps: GetStaticProps<WorkPageProps> = async () => {
  const experience: WorkExperienceProps[] = Retrivers.getYaml(
    "content/work/experience.yaml",
  );
  const education: EducationProps[] = Retrivers.getYaml(
    "content/work/education.yaml",
  );

  return {
    props: {
      experience: experience,
      education: education,
    },
  };
};

interface WorkExperienceProps {
  employer: string;
  tenure: string;
  role: string;
  description: string;
}

interface EducationProps {
  institution: string;
  term: string;
  degree: string;
}

function WorkExperience({
  employer,
  tenure,
  role,
  description,
}: WorkExperienceProps) {
  const markup = { __html: description };

  return (
    <>
      <h2 className="text-2xl text-end whitespace-pre-line">{tenure}</h2>
      <div>
        <div className="mt-1.5 w-5 h-5 bg-black rounded-full" />
        <div className="relative -top-5 -z-1 mr-2.25 border-r-2 border-dashed border-black h-full" />
      </div>
      <div className="mb-5">
        <h2 className="text-2xl">{employer}</h2>
        <h3 className="text-xl mb-5">{role}</h3>
        <p
          className="prose text-xl whitespace-pre-line text-black"
          dangerouslySetInnerHTML={markup}
        />
      </div>
    </>
  );
}

function EducationExperience({ institution, term, degree }: EducationProps) {
  return (
    <>
      <h2 className="text-2xl text-end whitespace-pre-line">{term}</h2>
      <div className="mt-1.5 w-5 h-5 bg-black rounded-full" />
      <div className="mb-5">
        <h2 className="text-2xl">{institution}</h2>
        <p className="text-xl mb-5">{degree}</p>
      </div>
    </>
  );
}
