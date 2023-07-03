import Image from 'next/image';

interface IProps {
  src: string;
  name: string;
}

export default function Card(props: IProps) {
  return (
    <div className="flex flex-col items-center max-w-xs px-5 py-3 rounded-lg bg-neutral-900">
      <Image src={props.src} height={280} width={640} alt="sponsor"></Image>
      <p className="text-lg font-thin text-green-100/60">{props.name}</p>
    </div>
  );
}
