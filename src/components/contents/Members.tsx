import Card from './Members/Card';
import { IMember } from './Members/members';

export default function Members() {
  const data: IMember = {
    nickname: 'Lazp',
    club: 'MDCPP',
    title: 'labor',
    titleInClub: 'Public Relationship',
    avatar: 'https://avatars.githubusercontent.com/u/86413185',
    selfInto: "I'm Lazp ijioijoijoijoijoijoijoijoijoijoijoijoijoijoij",
  };
  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl font-bold text-red-900 mt-3 text-center">
          歷屆成員
        </h1>
        <div className="list flex flex-row flex-wrap justify-center gap-10 max-w-screen-xl mx-auto mt-20">
          <Card member={data}></Card>
          <Card member={data}></Card>
          <Card member={data}></Card>
          <Card member={data}></Card>
          <Card member={data}></Card>
          <Card member={data}></Card>
          <Card member={data}></Card>
          <Card member={data}></Card>
        </div>
      </div>
    </>
  );
}
