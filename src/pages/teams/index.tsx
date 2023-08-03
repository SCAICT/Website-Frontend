import { IGroup } from '@/components/contents/groups/groups';
import PageTitle from '@/components/layout/pageTitle';
import Card from '@/components/contents/groups/Card';
import { useEffect, useState } from 'react';

export default function Team() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const GetGroups = async () => {
      try {
        const res = await fetch('https://api.scaict.org/groups');
        if (!res.ok) throw Error('Fetching Error with GetGroup Function.');
        const data = await res.json();
        setGroups(data);
      } catch (err) {
        console.error(err);
      }
    };
    GetGroups();
  }, []);

  return (
    <>
      <div className="w-full h-full m-auto overflow-hidden">
        <PageTitle title="內部團隊" />
        <div className="p-[2.5svh]">
          <div className="w-full h-[calc(100svh-45svh)] flex flex-wrap gap-8 items-center justify-center overflow-y-scroll overflow-x-hidden	">
            {groups.map((item) => {
              return <Card group={item}></Card>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
