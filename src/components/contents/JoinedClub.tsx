import Card from './JoinedClubs/Card';
import { IClubInfo } from './JoinedClubs/club';

export default function JoinedClubs() {
  const data: IClubInfo = {
    name: 'MDCPP',
    school: '明道中學',
    insID: '@mdcpp.2022',
    icon: 'https://yt3.ggpht.com/VIARxMe5c5YQwfqchu8oaJKZ2eIJWvjAFj9cPHoix-4pI8DBt4lPtQW5rmeZBVFPmH_DfnfJ=s900-c-k-c0x00ffffff-no-rj',
    introduction: '[markdown]',
  };

  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl font-bold text-red-900 mt-3 text-center">
          參與社團
        </h1>
        <div className="list flex flex-row flex-wrap justify-center gap-10 max-w-screen-xl mx-auto mt-20">
          <Card club={data}></Card>
          <Card club={data}></Card>
          <Card club={data}></Card>
          <Card club={data}></Card>
          <Card club={data}></Card>
          <Card club={data}></Card>
          <Card club={data}></Card>
          <Card club={data}></Card>
        </div>
      </div>
    </>
  );
}
