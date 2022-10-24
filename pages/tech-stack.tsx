import {GetStaticProps, NextPage} from "next";
import {apiService} from "../services/ApiService";
import {Tech, TechStackCategories} from "../models/apiModels";
import {StringChildrenProps} from "../models";
import {TechItem} from "../components/TechItem";
import {Routes} from "../utilities/routes";
import {replaceUrlState} from "../utilities/url";

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

interface TitleProps extends StringChildrenProps {
  category: TechStackCategories,
}

const TechStack: NextPage<TechStackProps> = ({ techStack }) => {

  const NavItem = ({ children, category }: TitleProps) => (
    <div onClick={ e => {
      let anchor = document.getElementById(category);
      e.preventDefault();

      anchor && anchor.scrollIntoView({ behavior: 'smooth' });

      replaceUrlState(Routes.techStackWithAnchor(category));
    } }>
      <h1 className="font-ocr text-jy-lime text-3xl sm:text-5xl my-5 hover:drop-shadow-nav-text text-right cursor-pointer">{ children }</h1>
    </div>
  )

  return (
    <div className="grid grid-cols-2 gap-10 w-full h-screen">
      <div className="hidden md:grid justify-items-end items-center">
        <div className="grid">
          <NavItem category={ TechStackCategories.web }>Web</NavItem>
          <NavItem category={ TechStackCategories.mobile }>Mobile</NavItem>
          <NavItem category={ TechStackCategories.design }>Design</NavItem>
          <NavItem category={ TechStackCategories.backend }>Backend</NavItem>
          <NavItem category={ TechStackCategories.language }>Language</NavItem>
        </div>
      </div>

      <div className="grid justify-items-start items-center overflow-y-scroll">
        <TechStackList techStack={ techStack } />
      </div>
    </div>
  )
}

export function TechStackList({ techStack }: TechStackProps) {

  const Title = ({ children, category }: TitleProps) => (
    <h4 id={ category }
        className="font-ocr text-1xl sm:text-2xl text-jy-yellow pt-16 mb-4 text-jy-lime">
      { children }
    </h4>
  )

  return (
    <div className="md:p-20 z-10 w-full">
      <Title category={ TechStackCategories.web }>Web</Title>
      <>
        {
          techStack.filter(t => t.attributes.category === TechStackCategories.web).map(t =>
            <TechItem tech={ t } key={ t.id } />
          )
        }
      </>

      <Title category={ TechStackCategories.mobile }>Mobile</Title>
      <>
        {
          techStack.filter(t => t.attributes.category === TechStackCategories.mobile).map(t =>
            <TechItem tech={ t } key={ t.id } />
          )
        }
      </>

      <Title category={ TechStackCategories.design }>Design</Title>
      <>
        {
          techStack.filter(t => t.attributes.category === TechStackCategories.design).map(t =>
            <TechItem tech={ t } key={ t.id } />
          )
        }
      </>

      <Title category={ TechStackCategories.backend }>Backend</Title>
      <>
        {
          techStack.filter(t => t.attributes.category === TechStackCategories.backend).map(t =>
            <TechItem tech={ t } key={ t.id } />
          )
        }
      </>

      <Title category={ TechStackCategories.language }>Language</Title>
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