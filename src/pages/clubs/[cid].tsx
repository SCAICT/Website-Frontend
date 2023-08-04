import { useRouter } from 'next/router';

import PageTitle from '@/components/layout/pageTitle';
import { IClubInfo } from '@/components/contents/JoinedClubs/club';

import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const Post = () => {
  const router = useRouter();
  const { query = {} } = router || {};
  const { cid = 0 } = query || {};
  const [club, setClub] = useState<IClubInfo>();
  useEffect(() => {
    const GetClub = async () => {
      try {
        const res = await fetch(`https://api.scaict.org/clubs/${cid}`);
        if (!res.ok) throw Error('Fetching Error with GetClub Function.');
        const data = await res.json();
        setClub(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (cid) GetClub();
  }, [cid]);

  return (
    <>
      <PageTitle title="社團介紹"></PageTitle>
      <div className="bg-neutral-900 py-5 px-6 rounded-xl max-w-[80svw] m-auto mt-8">
        <h1 className="text-2xl font-bold text-green-500 my-1">{club?.name}</h1>
        <span className="font-thin text-sm text-gray-500 pr-1">
          學校: {club?.school}
        </span>
        <span className="font-thin text-sm text-gray-500">
          Instagram: {club?.instagram_id}
        </span>
        <div className="mt-4">
          <ReactMarkdown>{club?.description}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Post;
