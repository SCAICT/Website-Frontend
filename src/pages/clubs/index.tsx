import Card from '@/components/contents/JoinedClubs/Card';
import { IClubInfo } from '@/components/contents/JoinedClubs/club';
import PageTitle from '@/components/layout/pageTitle';

export default function Clubs() {
  const data: IClubInfo = {
    name: 'MDCPP',
    school: '明道中學',
    insID: '@mdcpp.2022',
    icon: 'https://yt3.ggpht.com/VIARxMe5c5YQwfqchu8oaJKZ2eIJWvjAFj9cPHoix-4pI8DBt4lPtQW5rmeZBVFPmH_DfnfJ=s900-c-k-c0x00ffffff-no-rj',
    introduction: '[markdown]',
  };
  return (
    <>
      <PageTitle title="參與社團"></PageTitle>
      <div className="bg-neutral-900 w-full flex items-center justify-center flex-wrap gap-8 py-10 px-10 max-[640px]:px-2 ">
        <Card club={data}></Card>
        <Card club={data}></Card>
        <Card club={data}></Card>
        <Card club={data}></Card>
        <Card club={data}></Card>
        <Card club={data}></Card>
        <Card club={data}></Card>
        <Card club={data}></Card>
        <Card club={data}></Card>
        <Card club={data}></Card>
        <Card club={data}></Card>
      </div>
    </>
  );
}
