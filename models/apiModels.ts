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