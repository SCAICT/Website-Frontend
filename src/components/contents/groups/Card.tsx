import { useRouter } from 'next/router';
import { IGroup } from './groups';

interface IProps {
  group: IGroup;
}

export default function Card(props: IProps) {
  const data = props.group;

  const Router = useRouter();

  return (
    <>
      <div
        className="w-[448px] px-6 py-5 cursor-pointer bg-neutral-900 rounded-xl max-[640px]:max-w-[90vw]"
        onClick={() => Router.push(`/teams/${data.id}`)}
      >
        <h1 className="my-1 text-2xl font-bold text-green-500">{data.name}</h1>
        <p className="mt-3 font-light text-gray-400">{data.description}</p>
      </div>
    </>
  );
}
