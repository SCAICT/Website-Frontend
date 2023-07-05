import PageTitle from '@/components/layout/pageTitle';
import Card from '@/components/contents/Articles/Card';
import { IArticles } from '@/components/contents/Articles/article';

export default function Articles() {
  const data = {
    id: 'abc',
    title: 'Test Tested Testing',
    timestamp: '20230422',
    tag: ['123', '456'],
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum voluptatem temporibus laborum illo ratione labore dolorum distinctio sint? Sit fugiat deleniti ipsa tenetur eius similique placeat quod sint quas.',
  };
  return (
    <>
      <div className="w-full h-full m-auto">
        <PageTitle title="社群文章" />
        <div className="p-[2.5svh]">
          <div className="w-full h-[calc(100svh-45svh)] flex flex-wrap gap-8 items-center justify-center overflow-y-scroll overflow-x-hidden	">
            <Card article={data} />
            <Card article={data} />
            <Card article={data} />
            <Card article={data} />
            <Card article={data} />
            <Card article={data} />
            <Card article={data} />
            <Card article={data} />
            <Card article={data} />
            <Card article={data} />
          </div>
        </div>
      </div>
    </>
  );
}
