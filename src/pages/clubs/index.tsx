import Card from '@/components/contents/JoinedClubs/Card';
import { IClubInfo } from '@/components/contents/JoinedClubs/club';
import PageTitle from '@/components/layout/pageTitle';

export default function Clubs() {
  const data: IClubInfo = {
    name: 'MDCPP',
    school: '明道中學',
    insID: '@mdcpp.2022',
    icon: 'https://yt3.ggpht.com/VIARxMe5c5YQwfqchu8oaJKZ2eIJWvjAFj9cPHoix-4pI8DBt4lPtQW5rmeZBVFPmH_DfnfJ=s900-c-k-c0x00ffffff-no-rj',
    introduction: '*TTT*',
  };
  return (
    <>
      <div className="w-full h-full m-auto">
        <PageTitle title="參與社團" />
        <div className="p-[2.5svh]">
          <div className="w-full h-[calc(100svh-45svh)] flex flex-wrap gap-8 items-center justify-center overflow-y-scroll overflow-x-hidden	">
            <Card club={data} />
            <Card club={data} />
            <Card club={data} />
            <Card club={data} />
            <Card club={data} />
            <Card club={data} />
            <Card club={data} />
            <Card club={data} />
            <Card club={data} />
            <Card club={data} />
          </div>
        </div>
      </div>
    </>
  );
}
