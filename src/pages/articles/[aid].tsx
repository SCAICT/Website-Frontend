import { useRouter } from 'next/router';

import PageTitle from '@/components/layout/pageTitle';

const Post = () => {
  const router = useRouter();
  const { aid } = router.query;

  return <PageTitle title="文章"></PageTitle>;
};

export default Post;
