import PageTitle from '@/components/layout/pageTitle';
import Card from '@/components/contents/Articles/Card';
import { IArticles } from '@/components/contents/Articles/article';
import { useEffect, useState } from 'react';

export default function Articles() {
  const [articles, setArticles] = useState<Array<IArticles>>();
  useEffect(() => {
    const GetArticles = async () => {
      try {
        const res = await fetch('https://api.scaict.org/articles');
        if (!res.ok) throw Error('Fetching Error with GetArticles Function.');
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error(err);
      }
    };
    GetArticles();
  }, []);
  return (
    <>
      <div className="w-full h-full m-auto">
        <PageTitle title="社群文章" />
        <div className="p-[2.5svh]">
          <div className="w-full h-[calc(100svh-45svh)] flex flex-wrap gap-8 items-center justify-center overflow-y-scroll overflow-x-hidden	">
            {articles?.map((item, i) => {
              return <Card key={i} article={item}></Card>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
