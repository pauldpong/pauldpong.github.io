import Header from 'components/common/Header'
import Head from 'next/head'
import type { GetStaticProps } from 'next';
import Retrivers from "posts/retrievers";

interface WorkPageProps {
  experiences: WorkExperienceProps[];
}

export default function Work({ experiences }: WorkPageProps) {
  return (
    <div>
      <Head>
        <title>Paul&apos;s Work</title>
      </Head>
      <div className="h-screen w-full md:w-3/4 xl:w-1/2 mx-auto p-5 md:p-15 xl:p-20">
        <div className="grid grid-cols-1 gap-1">
          <Header headerTitle="PAUL'S WORK" />
          <div className="font-sans mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className="flex flex-row">
            <div className="grid grid-cols-[max-content_max-content_1fr] gap-x-5 mb-20">
              {experiences.map((experience, index) => (<WorkExperience key={index} {...experience} />))}
            </div>
          </div>
        </div>
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
  const markup = { __html: description };

  return (
    <>
      <div className="text-2xl text-end whitespace-pre-line">{date}</div>
      <div>
        <div className="mt-1.5 w-5 h-5 bg-black rounded-full"></div>
        <div className="relative -top-5 -z-1 mr-2.25 border-r-2 border-dashed border-black h-full"></div>
      </div>
      <div className="mb-5">
        <div className="text-2xl">{employer}</div>
        <div className="text-xl mb-5">{role}</div>
        <div className="prose text-xl whitespace-pre-line text-black" dangerouslySetInnerHTML={markup} />
      </div>
    </>
  )
}
