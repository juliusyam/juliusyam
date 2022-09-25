import {GetStaticProps, NextPage} from "next";
import {DigitalArtworksProps } from "./index";
import {apiService} from "../../services/ApiService";
import {Artwork} from "../../models/apiModels";

const getArtworks = async(): Promise<Artwork[]> => {
  return await apiService.get('/api/artworks?populate=*')
    .then(({ data }) => data.data);
}

const getArtwork = async(id: string): Promise<Artwork> => {
  return await apiService.get(`/api/artworks/${ id }?populate=*`)
    .then(({ data }) => data.data);
}

export const getStaticPaths = async() => {

  return {
    paths: await getArtworks().then(artworks => artworks.map(a => ({
      params: {
        id: a.id.toString(),
      }
    }))),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async({ params }) => {

  const id = params?.id;

  if (!id) {
    return {
      props: {
        digitalArtwork: undefined,
      }
    };
  }

  return {
    props: {
      digitalArtwork: await getArtwork(id as string),
    }
  }
}

const DigitalArtwork: NextPage = (props) => {

  console.log(props);

  return (
    <h3>{ }</h3>
  )
}

export default DigitalArtwork