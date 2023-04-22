import Image from 'next/image';
import { IArticles } from './article';

interface IProps {
  article: IArticles;
}

export default function Card(props: IProps) {
  const data = props.article;
  return (
    <div className="p-6 flex flex-col items-start justify-center bg-white drop-shadow-lg rounded-lg w-[80svw]">
      <h1 className="text-2xl text-red-900">{data.title}</h1>
      <p className="mt-2 text-gray-500">{data.timestamp}</p>
      <p className="truncate max-w-full mt-3">{data.content}</p>
    </div>
  );
}
