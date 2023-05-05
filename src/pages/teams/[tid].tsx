import { useRouter } from 'next/router';

import PageTitle from '@/components/layout/pageTitle';
import { ITeam } from '@/components/contents/teams/teams';

const Post = () => {
  const router = useRouter();
  const { tid } = router.query;
  const data: ITeam = {
    name: '鍵盤組',
    number: 8777,
    leader: 'Lazp',
    description: '負責在網路上打嘴砲，然後寫一些 Fuck code 偶爾蹲一下資源。',
    members: ['AAA', 'BBB', 'NNN'],
  };
  return (
    <>
      <PageTitle title="內部分組"></PageTitle>
    </>
  );
};

export default Post;
