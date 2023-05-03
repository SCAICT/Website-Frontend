import PageTitle from '@/components/layout/pageTitle';
import Card from '@/components/contents/CommuArticles/Card';
import { IArticles } from '@/components/contents/CommuArticles/article';

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
      <PageTitle title="社群文章"></PageTitle>
      <div className="flex flex-col items-center gap-7 py-10">
        <Card article={data}></Card>
        <Card article={data}></Card>
        <Card article={data}></Card>
        <Card article={data}></Card>
        <Card article={data}></Card>
        <Card article={data}></Card>
        <Card article={data}></Card>
      </div>
    </>
  );
}
