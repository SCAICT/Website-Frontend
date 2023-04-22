import Image from 'next/image';
import { IClubInfo } from './club';

interface IProps {
  club: IClubInfo;
}

export default function Card(props: IProps) {
  const data = props.club;
  return (
    <div className="p-10 flex flex-col items-center bg-white drop-shadow-lg rounded-lg max-w-[80svw]">
      <h1 className="text-2xl text-red-900">{data.name}</h1>
      <Image src={data.icon} width={100} height={100} alt={data.name}></Image>
      <p>{data.school}</p>
      <a href={`https://instagram.com/${data.insID.replace('@', '')}`}>
        Instagram: {data.insID}
      </a>
      <p className="truncate">{data.introduction}</p>
    </div>
  );
}
