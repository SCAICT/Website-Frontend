import Card from '@/components/contents/JoinedClubs/Card';
import { IClubInfo } from '@/components/contents/JoinedClubs/club';

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
      <div className="min-h-[50svh] bg-gradient-to-r from-[rgb(60,60,97)] from-10% via-[rgb(78,106,119)] via-30% to-[#547e70] to-90% flex items-center justify-center">
        <h1 className="text-4xl tracking-widest font-thin">參與社團</h1>
      </div>
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
