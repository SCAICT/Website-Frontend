import Image from 'next/image';
import { IClubInfo } from './club';

interface IProps {
  club: IClubInfo;
}

export default function Card(props: IProps) {
  const data = props.club;
  return (
    <div className="px-10 py-8 flex flex-col items-center bg-neutral-800 drop-shadow-lg rounded-lg max-[640px]:w-[80svw] ">
      <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-500 my-3">
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
      <p className="truncate">{data.introduction}</p>
    </div>
  );
}
