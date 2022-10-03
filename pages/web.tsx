import {GetStaticProps, NextPage} from 'next';
import {apiService} from '../services/ApiService';
import Image from 'next/image';
import {Web} from "../models/apiModels";

interface WebsProps {
  webs: Web[],
}

export const getStaticProps: GetStaticProps<WebsProps> = async () => {

  return {
    props: {
      webs: await apiService.get('/api/webs?populate=*')
        .then(({ data }) => data.data)
    }
  }
}


const Webs: NextPage<WebsProps> = ({ webs }) => {

  return (
    <div className="grid grid-cols-portfolio-display w-full h-screen -mt-20">
      <div className="grid w-full h-full relative">
        <Image src='/img/web.jpg'
               layout="responsive"
               objectFit="cover"
               width="100%"
               height="100%" />

        <div className="absolute top-0 left-0 w-full h-full bg-jy-blue bg-opacity-80" />

        <h1 className="font-ocr drop-shadow-text absolute right-0 top-48 text-14xl">Web</h1>
      </div>

      <div className="grid grid-cols-1 gap-64 px-16 py-64 h-full overflow-y-scroll">
        {
          webs.map(web =>
            <div className="flex justify-start items-center" key={ web.id }>
              <div className="max-w-md w-full">
                <Image src={ web.attributes.image.data.attributes.url }
                       layout="responsive"
                       objectFit="cover" width="500" height="300" />
              </div>

              <div className="ml-8">
                <h2 className="font-ocr text-5xl text-jy-blue mb-8">{ web.attributes.title }</h2>
                <h3 className="font-tomorrow text-2xl text-gray-300 ml-1 my-3">{ web.attributes.brief }</h3>
                <h3 className="font-tomorrow text-2xl text-gray-600 ml-1 my-3">{ web.attributes.technologies }</h3>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Webs