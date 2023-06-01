import Link from 'next/link';

import Card from '../contents/JoinedClubs/Card';
import { IClubInfo } from '@/components/contents/JoinedClubs/club';

export default function ClubsBar() {
  const data: IClubInfo = {
    name: 'MDCPP',
    school: '明道中學',
    insID: '@mdcpp.2022',
    icon: 'https://yt3.ggpht.com/VIARxMe5c5YQwfqchu8oaJKZ2eIJWvjAFj9cPHoix-4pI8DBt4lPtQW5rmeZBVFPmH_DfnfJ=s900-c-k-c0x00ffffff-no-rj',
    introduction: '# 123',
  };
  return (
    <div className="bg-neutral-900 py-10">
      <h1 className="text-center text-3xl font-bold mb-10">參與社團</h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 px-4 animate__animated animate__fadeInUp duration-700	">
        <Card club={data}></Card>
        <Card club={data}></Card>
        <Card club={data}></Card>
        <Link
          href={'/clubs'}
          className="bg-neutral-700 mt-4 p-3 rounded-full w-12 h-12 flex items-center justify-center"
        >
          <i className="bx bx-dots-horizontal-rounded "></i>
        </Link>
      </div>
    </div>
  );
}
