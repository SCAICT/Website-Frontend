import { ITeam } from '@/components/contents/teams/teams';
import PageTitle from '@/components/layout/pageTitle';
import Card from '@/components/contents/teams/Card';

export default function Team() {
  const data: ITeam = {
    name: '鍵盤組',
    number: 8777,
    leader: 'Lazp',
    description: '負責在網路上打嘴砲，然後寫一些 Fuck code 偶爾蹲一下資源。',
    members: ['AAA', 'BBB', 'NNN'],
  };

  return (
    <>
      <PageTitle title="內部團隊"></PageTitle>
      <div className="w-full flex items-center justify-center flex-wrap gap-8 py-10 px-10 max-[640px]:px-2">
        <Card team={data}></Card>
        <Card team={data}></Card>
        <Card team={data}></Card>
        <Card team={data}></Card>
        <Card team={data}></Card>
        <Card team={data}></Card>
      </div>
    </>
  );
}
