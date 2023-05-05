import { ITeam } from './teams';

interface IProps {
  team: ITeam;
}

export default function Card(props: IProps) {
  const data = props.team;
  return (
    <>
      <div className="bg-neutral-900 py-5 px-6 max-w-md rounded-xl">
        <h1 className="text-2xl font-bold text-green-500 my-1">{data.name}</h1>
        <span className="font-thin text-sm text-gray-500 pr-1">
          人數: {data.number}
        </span>
        <span className="font-thin text-sm text-gray-500">
          組長: {data.leader}
        </span>
        <p className="mt-3 font-light text-gray-400">{data.description}</p>
      </div>
    </>
  );
}
