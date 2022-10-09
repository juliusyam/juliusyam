import {Artwork, Design, Project} from "../models/apiModels";
import {apiService} from "./ApiService";

export const getArtworks = async(): Promise<Artwork[]> => {
  return await apiService.get('/api/artworks?populate=*')
    .then(({ data }) => data.data);
}

export const getArtwork = async(id: string): Promise<Artwork> => {
  return await apiService.get(`/api/artworks/${ id }?populate=*`)
    .then(({ data }) => data.data)
    .catch(() => {
      return null
    })
}

export const getDesigns = async(): Promise<Design[]> => {
  return await apiService.get('/api/designs?populate=*')
    .then(({ data }) => data.data);
}

export const getDesign = async(id: string): Promise<Design> => {
  return await apiService.get(`/api/designs/${ id }?populate=*`)
    .then(({ data }) => data.data);
}

export const getExperimentalProjects = async(): Promise<Project[]> => {
  return await apiService.get('/api/projects?populate=*')
    .then(({ data }) => data.data);
}

