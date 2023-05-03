import { useRouter } from 'next/router';

import PageTitle from '@/components/layout/pageTitle';
import { IArticles } from '@/components/contents/CommuArticles/article';

const Post = () => {
  const router = useRouter();
  const { aid } = router.query;
  const data: IArticles = {
    id: String(aid),
    title: 'Why Burgers Should Be Handy',
    timestamp: '2023/04/29',
    tag: ['cools', 'technology'],
    content: `Because it is HandBurger Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporis praesentium?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporis praesentium?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporis praesentium?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporis praesentium?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporis praesentium?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporis praesentium?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporisn praesentium?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporis praesentium?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporis praesentium?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporis praesentium?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporis praesentium?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam iure quam suscipit. Necessitatibus, ducimus consequuntur
          iusto est officia deleniti sapiente dignissimos sint facere officiis
          eaque ullam, itaque velit corporis praesentium?`,
  };

  return (
    <>
      <PageTitle title="文章"></PageTitle>
      <div className="px-10 py-10 bg-neutral-900 w-4/5 mx-auto my-8 rounded-lg animate__animated animate__bounceInUp duration-500">
        <h1 className="text-lg font-extrabold">{data.title}</h1>
        <p className=" text-stone-400 font-thin">{data.timestamp}</p>
        <p className="text-white mt-5">{data.content}</p>
      </div>
    </>
  );
};

export default Post;
