import {GetStaticProps, NextPage} from 'next';
import {apiService} from '../services/ApiService';
import {Client} from '../models/apiModels';
import Link from 'next/link';
import {ImageButton, ImageButtonBackground} from "../components/ImageButton";
import {PageWrapper} from "../components/PageWrapper";

interface ClientsProps {
  clients: Client[],
}

export const getStaticProps: GetStaticProps<ClientsProps> = async () => {

  return {
    props: {
      clients: await apiService.get('/api/clients?populate=*')
        .then(({ data }) => {
          return data.data;
        }),
    }
  }
}

const Clients: NextPage<ClientsProps> = ({ clients }) => {

  return (
    // <PageWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-5 md:p-20">
        {
          clients.map(client =>
            <Link href={ client.attributes.link || '/' } passHref>
              <a target="_blank" rel="noopener noreferrer">
                <ImageButton src={`http://localhost:1337${ client.attributes.image.data.attributes.url }`}
                             onHoverText={ client.attributes.title }
                             width="800"
                             height="500"
                             background={ ImageButtonBackground.black } />
              </a>
            </Link>
          )
        }
      </div>
    // </PageWrapper>
  )
}

export default Clients