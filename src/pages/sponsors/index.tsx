import PageTitle from '@/components/layout/pageTitle';
import Card from '@/components/contents/sponsor/Card';

export default function Sponsor() {
  return (
    <>
      <PageTitle title="贊助廠商"></PageTitle>
      <div className="bg-neutral-800 w-full flex items-center justify-center flex-wrap gap-8 py-10 px-10 max-[640px]:px-2 ">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  );
}
