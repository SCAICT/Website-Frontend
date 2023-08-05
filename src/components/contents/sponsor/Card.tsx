import Image from 'next/image';

interface IProps {
  src: string;
  name: string;
}

export default function Card(props: IProps) {
  return (
    <div className="flex flex-col items-center max-w-xs px-5 py-3 rounded-lg bg-neutral-900">
      <img src={props.src} alt={props.name} className="max-w-full rounded-md" />
      <p className="text-lg mt-2 font-thin text-green-100/60">{props.name}</p>
    </div>
  );
}
