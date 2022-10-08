import {GetStaticProps, NextPage} from "next";
import {apiService} from "../services/ApiService";
import { Tech, TechStackCategories} from "../models/apiModels";
import {StringChildrenProps} from "../models";
import {TechItem} from "../components/TechItem";

interface TechStackProps {
  techStack: Tech[],
}

export const getStaticProps: GetStaticProps<TechStackProps> = async() => {

  return {
    props: {
      techStack: await apiService.get('/api/tech-stacks?populate=*')
        .then(({ data }) => {
          return data.data;
        })
    }
  }
}

const TechStack: NextPage<TechStackProps> = ({ techStack }) => {

  return (
    <div className="grid grid-cols-2 gap-10 w-full h-screen -mt-20">
      <div className="hidden md:grid justify-items-end items-center">
        <div className="grid">
          <h1>Web</h1>
          <h1>Mobile</h1>
        </div>
      </div>

      <div className="grid justify-items-start items-center overflow-y-scroll">
        <TechStackList techStack={ techStack } />
      </div>
    </div>
  )
}

export function TechStackList({ techStack }: TechStackProps) {

  const Title = ({ children }: StringChildrenProps) => (
    <h4 className="font-ocr text-1xl sm:text-2xl text-jy-yellow mb-4 text-jy-lime">{ children }</h4>
  )

  return (
    <div className="mb:p-20 z-10 w-full">
      <Title>Web</Title>
      <>
        {
          techStack.filter(t => t.attributes.category === TechStackCategories.web).map(t =>
            <TechItem tech={ t } />
          )
        }
      </>
    </div>
  )
}

export default TechStack