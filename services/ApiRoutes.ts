import {Artwork} from "../models/apiModels";
import {apiService} from "./ApiService";

export const getArtworks = async(): Promise<Artwork[]> => {
  return await apiService.get('/api/artworks?populate=*')
    .then(({ data }) => data.data);
}

export const getArtwork = async(id: string): Promise<Artwork> => {
  return await apiService.get(`/api/artworks/${ id }?populate=*`)
    .then(({ data }) => data.data);
}

