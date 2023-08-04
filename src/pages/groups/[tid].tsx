import { useRouter } from 'next/router';

import PageTitle from '@/components/layout/pageTitle';
import { IGroup } from '@/components/contents/groups/groups';
import Card from '@/components/contents/Members/Card';
import { useEffect, useState } from 'react';

export default function Post() {
  const router = useRouter();
  const { query = {} } = router || {};
  const { tid = 0 } = query || {};
  const [group, setGroup] = useState<IGroup>();
  useEffect(() => {
    const GetGroup = async () => {
      try {
        console.log(tid);
        const res = await fetch(`https://api.scaict.org/groups/${tid}`);
        if (!res.ok) throw Error('Fetching Error with GetMembers Function.');
        const data = await res.json();
        setGroup(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (tid) GetGroup();
  }, [tid]);

  return (
    <>
      <PageTitle title="內部分組"></PageTitle>
      <div className="bg-neutral-900 py-5 px-6 rounded-xl cursor-pointer max-w-[80svw] m-auto mt-8">
        <h1 className="text-2xl font-bold text-green-500 my-1">
          {group?.name}
        </h1>
        {/* <span className="font-thin text-sm text-gray-500 pr-1">
          人數: {members.number}
        </span>
        <span className="font-thin text-sm text-gray-500">
          組長: {data.leader}
        </span> */}
        <p className="mt-3 font-light text-gray-400">{group?.description}</p>
      </div>
      <div className="flex flex-wrap p-10 gap-4 items-center justify-center ">
        {group?.members.map((item, i) => {
          return <Card key={i} member={item}></Card>;
        })}
      </div>
    </>
  );
}
