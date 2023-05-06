import Image from 'next/image';

interface IProps {
  src: string;
  name: string;
}

export default function Card(props: IProps) {
  return (
    <div className="bg-neutral-900 px-5 py-3 max-w-xs rounded-lg flex flex-col items-center">
      <Image src={props.src} height={280} width={640} alt="sponsor"></Image>
      <p className="text-green-100/60 text-lg font-thin">{props.name}</p>
    </div>
  );
}
