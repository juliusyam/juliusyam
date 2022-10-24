import { TechStackCategories } from '../models/apiModels';

export const Routes = {
  home: '/' ,
  homeWithAnchor: (anchor: string) => `/#${ anchor }`,
  clients: '/clients',
  techStack: '/tech-stack',
  techStackWithAnchor: (anchor: TechStackCategories) => `/tech-stack#${ anchor }`,
  webs: '/web',
  mobiles: '/mobile',
  design: (id: number, anchor?: string) => `/design/${ id }${ anchor ? `#${ anchor }` : '' }`,
  designs: '/design',
  projects: '/project',
  digitalArtwork: (id: number) => `/digital-artwork/${ id }`,
  digitalArtworks: '/digital-artwork',
  contact: '/#contact-me',
}