import Image from 'next/image';
import { IArticles } from './article';
import { useRouter } from 'next/router';

interface IProps {
  article: IArticles;
}

export default function Card(props: IProps) {
  const data = props.article;
  const router = useRouter();

  return (
    <div
      className="p-6 flex flex-col items-start justify-center bg-neutral-900 drop-shadow-lg rounded-lg w-[80svw] cursor-pointer hover:scale-105 duration-300"
      onClick={() => {
        router.push('/articles/123');
      }}
    >
      <h1 className="text-2xl text-emerald-50">{data.title}</h1>
      <p className="mt-1 font-thin text-gray-500">{data.timestamp}</p>
      <p className="max-w-full mt-3 text-gray-500 truncate">{data.content}</p>
    </div>
  );
}
