import { useRouter } from 'next/router';

import PageTitle from '@/components/layout/pageTitle';
import { ITeam } from '@/components/contents/teams/teams';
import Card from '@/components/contents/Members/Card';
import { IMember } from '@/components/contents/Members/members';

const Post = () => {
  const router = useRouter();
  const { tid } = router.query;
  const member: IMember = {
    nickname: 'Lazp',
    title: 'noob',
    club: 'MDCPP',
    titleInClub: 'Public Relationship',
    selfInto: 'LazpLazp',
    avatar: 'https://banahaker.github.io/assets/logo_bana.385cac5b.png',
  };
  const data: ITeam = {
    name: '鍵盤組',
    number: 8777,
    leader: 'Lazp',
    description: '負責在網路上打嘴砲，然後寫一些 Fuck code 偶爾蹲一下資源。',
    members: ['AAA', 'BBB', 'NNN'],
  };
  return (
    <>
      <PageTitle title="內部分組"></PageTitle>
      <div className="bg-neutral-900 py-5 px-6 rounded-xl cursor-pointer max-w-[80svw] m-auto mt-8">
        <h1 className="text-2xl font-bold text-green-500 my-1">{data.name}</h1>
        <span className="font-thin text-sm text-gray-500 pr-1">
          人數: {data.number}
        </span>
        <span className="font-thin text-sm text-gray-500">
          組長: {data.leader}
        </span>
        <p className="mt-3 font-light text-gray-400">{data.description}</p>
      </div>
      <div className="flex flex-wrap p-10 gap-4 items-center justify-center ">
        <Card member={member}></Card>
        <Card member={member}></Card>
        <Card member={member}></Card>
        <Card member={member}></Card>
        <Card member={member}></Card>
        <Card member={member}></Card>
        <Card member={member}></Card>
        <Card member={member}></Card>
        <Card member={member}></Card>
      </div>
    </>
  );
};

export default Post;
