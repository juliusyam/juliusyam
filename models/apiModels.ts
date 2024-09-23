import {Social} from "../components/SocialButton";

export interface Client {
  id: number,
  attributes: ClientAttributes,
}

export interface ClientAttributes extends GlobalAttributes  {
  description: string,
  image: Image,
  link: string,
  role: string,
  title: string,
  sortOrder: number,
}

export interface Tech {
  id: number,
  attributes: TechAttributes
}

export enum TechStackCategories {
  web = 'web',
  mobile = 'mobile',
  backend = 'backend',
  design = 'design',
  softSkill = 'softSkill',
  language = 'language',
}

export enum ExperienceLevel {
  limited = 'limited',
  moderate = 'moderate',
  proficient = 'proficient',
}

export interface TechAttributes extends GlobalAttributes  {
  category: TechStackCategories,
  experienceLevel: ExperienceLevel,
  image: Image,
  title: string,
}

export interface Artwork {
  id: number,
  attributes: ArtworkAttributes,
}

export interface ArtworkAttributes extends GlobalAttributes {
  description: string,
  image: Image,
  title: string,
}

export interface Web {
  id: number,
  attributes: WebAttributes,
}

export type Mobile = Web;

export interface WebAttributes extends GlobalAttributes {
  brief: string,
  client: ClientRelation,
  image: Image,
  link?: string,
  sortOrder: number,
  technologies: string,
  title: string,
}

export interface Design {
  id: number,
  attributes: DesignAttributes
}

export interface DesignAttributes extends GlobalAttributes {
  about: string,
  brief: string,
  client: ClientRelation,
  contribution: string,
  image: Image,
  onlinePresences?: OnlinePresence[],
  products: string,
  sortOrder: number,
  title: string,
}

export interface Project {
  id: number,
  attributes: ProjectAttributes
}

export interface ProjectAttributes extends GlobalAttributes {
  brief: string,
  description: string,
  endedAt: Date,
  image: Image,
  links: LinkPresence[],
  startedAt: Date,
  title: string,
}

export interface DesignImageItem {
  id: number,
  attributes: DesignImageItemAttributes
}

export interface DesignImageItemAttributes extends GlobalAttributes {
  description: string,
  design: DesignRelation,
  image: Image,
  sortOrder: number,
  title: string,
}

export interface DesignRelation {
  data?: Design,
}

export interface ClientRelation {
  data?: Client,
}

export interface OnlinePresence {
  link: string,
  presenceType: Social,
}

export interface LinkPresence extends OnlinePresence {
  label: string,
}

export interface GlobalAttributes {
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date,
}

export interface Image {
  data: ImageData,
}

export interface ImageData {
  id: number,
  attributes: ImageAttributes
}

export interface ImageAttributes {
  alternativeText: string,
  caption: string,
  createdAt: Date,
  ext: string,
  formats: ImageFormats,
  hash: string,
  height: number,
  mime: string,
  name: string,
  previewUrl?: string,
  provider: string,
  provider_metadata?: string,
  size: number,
  updatedAt: Date,
  url: string,
  width: number,
}

export interface ImageFormats {
  small?: ImageFormat,
  medium?: ImageFormat,
  large?: ImageFormat,
  thumbnail?: ImageFormat,
}

export interface ImageFormat {
  ext: string,
  hash: string,
  height: number,
  mime: string,
  name: string,
  path?: string,
  size: number,
  url: string,
  width: number,
}
