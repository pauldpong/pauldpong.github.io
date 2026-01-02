import Header from 'components/common/Header'
import type { GetStaticProps } from 'next';
import Retrivers from "posts/retrievers";

interface WorkPageProps {
  experiences: WorkExperienceProps[];
}

export default function Work({ experiences }: WorkPageProps) {
  return (
    <div className="h-screen w-1/2 mx-auto p-24">
      <div className="grid grid-cols-1 gap-1">
        <Header headerTitle="PAUL'S WORK" />
        <div className="font-sans mb-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        {experiences.map((experience, index) => (<WorkExperience key={index} {...experience} />))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<WorkPageProps> = async () => {
  const experiences: WorkExperienceProps[] = Retrivers.getYaml('content/work-experience.yaml')

  return {
    props: {
      experiences: experiences,
    },
  }
}

interface WorkExperienceProps {
  employer: string
  date: string
  role: string
  description: string
}

function WorkExperience({ employer, date, role, description }: WorkExperienceProps) {
  // need to evaluate as a whole set of experience rather than one at a time
  return (
    <div className="grid grid-cols-[max-content_1fr] gap-5">
      <div className="justify-items-end bg-green-200">
        <div className="flex flex-row items-center">
          <div className="text-2xl whitespace-pre-line me-5 ">{date}</div>
          <div className="w-5 h-5 bg-black rounded-full"></div>
        </div>
      </div>
      <div className="bg-red-200">
        <div className="text-2xl">{employer}</div>
        <div className="text-xl mb-5">{role}</div>
        <div className="text-xl whitespace-pre-line">{description}</div>
      </div>
    </div>
  )
  // return (
  //   <div className="flex flex-row gap-5">
  //     <div className="flex-none flex flex-row h-min items-center">
  //       <div className="text-2xl whitespace-pre-line me-5 ">{date}</div>
  //       <div className="w-5 h-5 bg-black rounded-full"></div>
  //     </div>
  //     <div className="flex flex-col">
  //       <div className="text-2xl">{employer}</div>
  //       <div className="text-xl mb-5">{role}</div>
  //       <div className="text-xl whitespace-pre-line">{description}</div>
  //     </div>
  //   </div>
  // )
}
