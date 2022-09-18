export interface Client {
  id: number,
  attributes: ClientAttributes,
}

export interface ClientAttributes {
  createdAt: Date,
  description: string,
  image: Image,
  link: string,
  publishedAt: Date,
  role: string,
  title: string,
  updatedAt: Date,
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