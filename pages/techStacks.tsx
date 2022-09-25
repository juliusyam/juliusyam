import {GetStaticProps, NextPage} from "next";
import {apiService} from "../services/ApiService";
import {TechStack, TechStackCategories} from "../models/apiModels";
import {StringChildrenProps} from "../models";
import {TechItem} from "../components/TechItem";

interface TechStackProps {
  techStacks: TechStack[],
}

export const getStaticProps: GetStaticProps<TechStackProps> = async() => {

  return {
    props: {
      techStacks: await apiService.get('/api/tech-stacks?populate=*')
        .then(({ data }) => {
          return data.data;
        })
    }
  }
}

const TechStacks: NextPage<TechStackProps> = ({ techStacks }) => {

  return (
    <div className="grid grid-cols-2 gap-4 p-5 md:p-20">
      <div className="hidden md:grid justify-items-end items-center">
        <div className="grid p-20">
          <h1>Web</h1>
          <h1>Mobile</h1>
        </div>
      </div>

      <div className="grid justify-items-start items-center">
        <TechStackList techStacks={ techStacks } />
      </div>
    </div>
  )
}

export function TechStackList({ techStacks }: TechStackProps) {

  const Title = ({ children }: StringChildrenProps) => (
    <h4 className="font-ocr text-1xl sm:text-2xl text-jy-yellow mb-4 text-jy-lime">{ children }</h4>
  )

  return (
    <div className="p-5 mb:p-20 z-10 w-full">
      <Title>Web</Title>
      <>
        {
          techStacks.filter(t => t.attributes.category === TechStackCategories.web).map(t =>
            <TechItem tech={ t } />
          )
        }
      </>
    </div>
  )
}

export default TechStacks