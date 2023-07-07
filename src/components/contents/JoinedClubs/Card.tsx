import Image from 'next/image';
import { IClubInfo } from './club';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
interface IProps {
  club: IClubInfo;
}

export default function Card(props: IProps) {
  const data = props.club;
  const Router = useRouter();
  return (
    <div
      className="px-10 py-8 flex flex-col items-center bg-neutral-800 drop-shadow-lg max-w-md rounded-lg max-[640px]:w-[80svw] cursor-pointer hover:scale-110 transform-gpu duration-700 h-auto min-h-[350px]"
      onClick={() => Router.push('/clubs/mdcpp')}
    >
      <h1 className="my-3 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-500">
        {data.name}
      </h1>
      <Image
        className="rounded"
        src={data.icon}
        width={100}
        height={100}
        alt={data.name}
      ></Image>
      <p className="my-2 font-thin">{data.school}</p>
      <a
        className="text-center"
        href={`https://instagram.com/${data.insID.replace('@', '')}`}
      >
        Instagram: {data.insID}
      </a>
      <ReactMarkdown>{data.introduction}</ReactMarkdown>
    </div>
  );
}
