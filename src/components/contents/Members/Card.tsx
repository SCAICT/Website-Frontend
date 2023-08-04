import Image from 'next/image';
import { IMember } from './members';

interface IProps {
  member: IMember;
}

export default function Card(props: IProps) {
  const data = props.member;
  return (
    <div className="p-10 flex flex-col items-center gap-5 bg-neutral-900 drop-shadow-lg rounded-lg max-w-xs max-[640px]:max-w-[80svw]">
      <h1 className="text-3xl font-bold text-green-500">{data.nickname}</h1>
      <Image
        src={data?.avatar}
        width={100}
        height={100}
        alt={data?.nickname}
        className="rounded-full"
      ></Image>
      <p className="text-sm font-thin tracking-widest text-slate-400 ">
        {data.club
          ? data.club.name + (data.club_position ? data.club_position : '')
          : '無'}
      </p>
      <p className="max-w-full truncate text-green-800/80">
        {data.description}
      </p>
    </div>
  );
}
