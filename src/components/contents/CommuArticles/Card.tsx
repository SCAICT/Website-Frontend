import Image from 'next/image';
import { IArticles } from './article';

interface IProps {
  article: IArticles;
}

export default function Card(props: IProps) {
  const data = props.article;
  return (
    <div className="p-6 flex flex-col items-start justify-center bg-neutral-900 drop-shadow-lg rounded-lg w-[80svw] cursor-pointer hover:scale-105 duration-300">
      <h1 className="text-2xl text-emerald-50">{data.title}</h1>
      <p className="mt-1 text-gray-500 font-thin">{data.timestamp}</p>
      <p className="truncate max-w-full mt-3 text-gray-500">{data.content}</p>
    </div>
  );
}
