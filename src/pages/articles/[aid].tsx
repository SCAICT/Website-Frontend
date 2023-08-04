import { useRouter } from 'next/router';

import PageTitle from '@/components/layout/pageTitle';
import { IArticles } from '@/components/contents/Articles/article';
import { useEffect, useState } from 'react';

const Post = () => {
  const router = useRouter();
  const [article, setArticle] = useState<IArticles>();
  const { query = {} } = router || {};
  const { aid = '' } = query || {};
  useEffect(() => {
    const GetArticle = async () => {
      try {
        const res = await fetch(`https://api.scaict.org/articles/${aid}`);
        if (!res.ok) throw Error('Fetching Error with GetArticle Function.');
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (aid) GetArticle();
  }, [aid]);

  return (
    <>
      <PageTitle title="文章"></PageTitle>
      <div className="px-10 py-10 bg-neutral-900 w-4/5 mx-auto my-8 rounded-lg animate__animated animate__bounceInUp duration-500">
        <h1 className="text-lg font-extrabold">{article?.title}</h1>
        <p className=" text-stone-400 font-thin">{article?.created_at}</p>
        <p className="text-white mt-5">{article?.content}</p>
      </div>
    </>
  );
};

export default Post;
