import { useRouter } from 'next/router';

import PageTitle from '@/components/layout/pageTitle';
import { IClubInfo } from '@/components/contents/JoinedClubs/club';

import ReactMarkdown from 'react-markdown';

const Post = () => {
  const router = useRouter();
  const { cid } = router.query;
  const data: IClubInfo = {
    name: 'MDCPP',
    school: '明道中學',
    insID: '@mdcpp.2022',
    icon: 'https://yt3.ggpht.com/VIARxMe5c5YQwfqchu8oaJKZ2eIJWvjAFj9cPHoix-4pI8DBt4lPtQW5rmeZBVFPmH_DfnfJ=s900-c-k-c0x00ffffff-no-rj',
    introduction: ` # *明道競程計畫*  
    123  
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, delectus expedita corrupti molestias assumenda, dolorem quidem dolorum et fuga odio ut voluptate quos soluta distinctio deserunt aut rerum unde illo.`,
    clubID: 'mdcpp',
  };
  return (
    <>
      <PageTitle title="內部分組"></PageTitle>
      <div className="bg-neutral-900 py-5 px-6 rounded-xl max-w-[80svw] m-auto mt-8">
        <h1 className="text-2xl font-bold text-green-500 my-1">{data.name}</h1>
        <span className="font-thin text-sm text-gray-500 pr-1">
          學校: {data.school}
        </span>
        <span className="font-thin text-sm text-gray-500">
          Instagram: {data.insID}
        </span>
        <div className="mt-4">
          <ReactMarkdown>{data.introduction}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Post;
