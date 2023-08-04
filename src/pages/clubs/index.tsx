import Card from '@/components/contents/JoinedClubs/Card';
import { IClubInfo } from '@/components/contents/JoinedClubs/club';
import PageTitle from '@/components/layout/pageTitle';
import { useEffect, useState } from 'react';

export default function Clubs() {
  const [clubs, setClubs] = useState<Array<IClubInfo>>();
  useEffect(() => {
    const GetClubs = async () => {
      try {
        const res = await fetch('https://api.scaict.org/clubs');
        if (!res.ok) throw Error('Fetching Error with GetClubs Function.');
        const data = (await res.json()) as Array<IClubInfo>;
        setClubs(data);
      } catch (err) {
        console.error(err);
      }
    };
    GetClubs();
  }, []);
  return (
    <>
      <div className="w-full h-full m-auto">
        <PageTitle title="參與社團" />
        <div className="p-[2.5svh]">
          <div className="w-full h-[calc(100svh-45svh)] flex flex-wrap gap-8 items-center justify-center overflow-y-scroll overflow-x-hidden	">
            {clubs?.map((item, i) => {
              return <Card key={i} club={item}></Card>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
