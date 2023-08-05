import PageTitle from '@/components/layout/pageTitle';
import Card from '@/components/contents/sponsor/Card';
import { ISponsor } from '@/components/contents/sponsor/sponsor';
import { useEffect, useState } from 'react';

export default function Sponsor() {
  const [sponsors, setSponsors] = useState<Array<ISponsor>>();
  useEffect(() => {
    const GetSponsor = async () => {
      try {
        const res = await fetch('https://api.scaict.org/sponsors');
        if (!res.ok) throw Error('Fetching Error with GetSponsor Function.');
        const data = await res.json();
        console.log(data);
        setSponsors(data);
      } catch (err) {
        console.error(err);
      }
    };
    GetSponsor();
  }, []);

  return (
    <>
      <div className="w-full h-full m-auto">
        <PageTitle title="贊助廠商" />
        <div className="p-[2.5svh]">
          <div className="w-full h-[calc(100svh-45svh)] flex flex-wrap gap-8 items-center justify-center overflow-y-scroll overflow-x-hidden	">
            {sponsors?.map((item, i) => {
              return (
                <Card src={item.url} name={item.description} key={i}></Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
