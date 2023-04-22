import { useState, useEffect } from 'react';
import JoinedClubs from './JoinedClub';
import Members from './Members';
import Articles from './CommuArticles';
import InsideGroups from './InsideGroups';
import RecentActivities from './recentActivities';
import Sponsors from './Sponsors';

interface IProps {
  page: string;
}

export default function ContentBlock(props: IProps, ref: any) {
  const [page, setPage] = useState(props.page);

  useEffect(() => {
    if (props) {
      setPage(props.page);
    }
  }, [props]);

  return (
    <div className="flex flex-col items-center text-neutral-950">
      <div className="linkbar flex jutify-center items-center gap-5 py-5 overflow-x-auto max-w-full max-[640px]:gap-1 px-3 ">
        <span
          className=" text-orange-950 font-semibold text-lg cursor-pointer hover:bg-orange-950/10 px-5 py-1 rounded-md ease-out duration-300 text-center max-[640px]:text-base max-[640px]:px-1"
          onClick={() => setPage('clubs')}
        >
          參與社團
        </span>
        <span
          className=" text-orange-950 font-semibold text-lg cursor-pointer hover:bg-orange-950/10 px-5 py-1 rounded-md ease-out duration-300 text-center max-[640px]:text-base max-[640px]:px-1"
          onClick={() => setPage('members')}
        >
          歷屆成員
        </span>
        <span
          className=" text-orange-950 font-semibold text-lg cursor-pointer hover:bg-orange-950/10 px-5 py-1 rounded-md ease-out duration-300 text-center max-[640px]:text-base max-[640px]:px-1"
          onClick={() => setPage('article')}
        >
          社群文章
        </span>
        <span
          className=" text-orange-950 font-semibold text-lg cursor-pointer hover:bg-orange-950/10 px-5 py-1 rounded-md ease-out duration-300 text-center max-[640px]:text-base max-[640px]:px-1"
          onClick={() => setPage('inside')}
        >
          內部分組
        </span>
        <span
          className=" text-orange-950 font-semibold text-lg cursor-pointer hover:bg-orange-950/10 px-5 py-1 rounded-md ease-out duration-300 text-center max-[640px]:text-base max-[640px]:px-1"
          onClick={() => setPage('recent')}
        >
          近期活動
        </span>
        <span
          className=" text-orange-950 font-semibold text-lg cursor-pointer hover:bg-orange-950/10 px-5 py-1 rounded-md ease-out duration-300 text-center max-[640px]:text-base max-[640px]:px-1"
          onClick={() => setPage('sponsor')}
        >
          贊助單位
        </span>
      </div>
      {page == 'clubs' ? (
        <JoinedClubs />
      ) : page == 'members' ? (
        <Members></Members>
      ) : page == 'article' ? (
        <Articles />
      ) : page == 'inside' ? (
        <InsideGroups />
      ) : page == 'recent' ? (
        <RecentActivities />
      ) : page == 'sponsor' ? (
        <Sponsors />
      ) : (
        'Page Routing Error'
      )}
    </div>
  );
}
