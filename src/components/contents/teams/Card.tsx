import { useRouter } from 'next/router';
import { ITeam } from './teams';

interface IProps {
  team: ITeam;
}

export default function Card(props: IProps) {
  const data = props.team;

  const Router = useRouter();

  return (
    <>
      <div
        className="max-w-md px-6 py-5 cursor-pointer bg-neutral-900 rounded-xl"
        onClick={() => Router.push('/teams/123')}
      >
        <h1 className="my-1 text-2xl font-bold text-green-500">{data.name}</h1>
        <span className="pr-1 text-sm font-thin text-gray-500">
          人數: {data.number}
        </span>
        <span className="text-sm font-thin text-gray-500">
          組長: {data.leader}
        </span>
        <p className="mt-3 font-light text-gray-400">{data.description}</p>
      </div>
    </>
  );
}
