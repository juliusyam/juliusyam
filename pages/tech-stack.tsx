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

  const NavItem = ({ children }: StringChildrenProps) => (
    <h1 className="font-ocr text-jy-lime text-3xl sm:text-5xl my-5 hover:drop-shadow-nav-text text-right cursor-pointer">{ children }</h1>
  )

  return (
    <div className="grid grid-cols-2 gap-10 w-full h-screen">
      <div className="hidden md:grid justify-items-end items-center">
        <div className="grid">
          <NavItem>Web</NavItem>
          <NavItem>Mobile</NavItem>
          <NavItem>Design</NavItem>
          <NavItem>Backend</NavItem>
          <NavItem>Language</NavItem>
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
    <h4 className="font-ocr text-1xl sm:text-2xl text-jy-yellow mt-16 mb-4 text-jy-lime">{ children }</h4>
  )

  return (
    <div className="md:p-20 z-10 w-full">
      <Title>Web</Title>
      <>
        {
          techStack.filter(t => t.attributes.category === TechStackCategories.web).map(t =>
            <TechItem tech={ t } key={ t.id } />
          )
        }
      </>

      <Title>Mobile</Title>
      <>
        {
          techStack.filter(t => t.attributes.category === TechStackCategories.mobile).map(t =>
            <TechItem tech={ t } key={ t.id } />
          )
        }
      </>

      <Title>Design</Title>
      <>
        {
          techStack.filter(t => t.attributes.category === TechStackCategories.design).map(t =>
            <TechItem tech={ t } key={ t.id } />
          )
        }
      </>

      <Title>Backend</Title>
      <>
        {
          techStack.filter(t => t.attributes.category === TechStackCategories.backend).map(t =>
            <TechItem tech={ t } key={ t.id } />
          )
        }
      </>

      <Title>Language</Title>
      <>
        {
          techStack.filter(t => t.attributes.category === TechStackCategories.language).map(t =>
            <TechItem tech={ t } key={ t.id } />
          )
        }
      </>
    </div>
  )
}

export default TechStack