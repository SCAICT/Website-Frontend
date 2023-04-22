import Card from './CommuArticles/Card';

export default function Articles() {
  const data = {
    title: 'Test Tested Testing',
    timestamp: '20230422',
    tag: ['123', '456'],
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum voluptatem temporibus laborum illo ratione labore dolorum distinctio sint? Sit fugiat deleniti ipsa tenetur eius similique placeat quod sint quas.',
  };
  return (
    <>
      <div className="w-full cursor-pointer">
        <h1 className="text-3xl font-bold text-red-900 mt-3 text-center">
          社群文章
        </h1>
        <div className="list flex flex-row flex-wrap justify-center gap-10 max-w-screen-xl mx-auto mt-20">
          <Card article={data}></Card>
          <Card article={data}></Card>
          <Card article={data}></Card>
          <Card article={data}></Card>
          <Card article={data}></Card>
          <Card article={data}></Card>
        </div>
      </div>
    </>
  );
}
