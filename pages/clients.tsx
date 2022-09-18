import { NextPage, GetStaticProps } from 'next';
import { useEffect } from 'react';
import { apiService } from "../services/ApiService";
import {Client} from "../models/apiModels";

interface ClientsProps {
  clients: Client[],
}

export const getStaticProps: GetStaticProps<ClientsProps> = async () => {

  return {
    props: {
      clients: await apiService.get('/api/clients?populate=*')
        .then(({ data }) => {
          console.log(data.data);
          return data.data;
        }),
    }
  }
}

const Clients: NextPage<ClientsProps> = ({ clients }) => {

  return (
    <div>
      {
        clients.map(client =>
          <h3>{ client.attributes.title }</h3>
        )
      }
    </div>
  )
}

export default Clients