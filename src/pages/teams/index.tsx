import { ITeam } from '@/components/contents/teams/teams';
import PageTitle from '@/components/layout/pageTitle';
import Card from '@/components/contents/teams/Card';

export default function Team() {
  const data: ITeam = {
    name: '鍵盤組',
    number: 8777,
    leader: 'Lazp、HACO',
    description: '負責在網路上打嘴砲，然後寫一些 Fuck code 偶爾蹲一下資源。',
    members: ['AAA', 'BBB', 'NNN'],
  };

  return (
    <>
      <div className="w-full h-full m-auto overflow-hidden">
        <PageTitle title="內部團隊" />
        <div className="p-[2.5svh]">
          <div className="w-full h-[calc(100svh-45svh)] flex flex-wrap gap-8 items-center justify-center overflow-y-scroll overflow-x-hidden	">
            <Card team={data} />
            <Card team={data} />
            <Card team={data} />
            <Card team={data} />
            <Card team={data} />
            <Card team={data} />
            <Card team={data} />
            <Card team={data} />
            <Card team={data} />
            <Card team={data} />
          </div>
        </div>
      </div>
    </>
  );
}
