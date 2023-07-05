import PageTitle from '@/components/layout/pageTitle';
import Card from '@/components/contents/sponsor/Card';

export default function Sponsor() {
  return (
    <>
      <div className="w-full h-full m-auto">
        <PageTitle title="贊助廠商" />
        <div className="p-[2.5svh]">
          <div className="w-fＦll h-[calc(100svh-45svh)] flex flex-wrap gap-8 items-center justify-center overflow-y-scroll overflow-x-hidden	">
            <Card
              src="https://raw.githubusercontent.com/Lazco-Team/Lazco-Website/main/public/images/logo-long.png"
              name="Lazco Ltd."
            ></Card>
            <Card
              src="https://raw.githubusercontent.com/Lazco-Team/Lazco-Website/main/public/images/logo-long.png"
              name="Lazco Ltd."
            ></Card>
            <Card
              src="https://raw.githubusercontent.com/Lazco-Team/Lazco-Website/main/public/images/logo-long.png"
              name="Lazco Ltd."
            ></Card>
            <Card
              src="https://raw.githubusercontent.com/Lazco-Team/Lazco-Website/main/public/images/logo-long.png"
              name="Lazco Ltd."
            ></Card>
            <Card
              src="https://raw.githubusercontent.com/Lazco-Team/Lazco-Website/main/public/images/logo-long.png"
              name="Lazco Ltd."
            ></Card>
            <Card
              src="https://raw.githubusercontent.com/Lazco-Team/Lazco-Website/main/public/images/logo-long.png"
              name="Lazco Ltd."
            ></Card>
            <Card
              src="https://raw.githubusercontent.com/Lazco-Team/Lazco-Website/main/public/images/logo-long.png"
              name="Lazco Ltd."
            ></Card>
            <Card
              src="https://raw.githubusercontent.com/Lazco-Team/Lazco-Website/main/public/images/logo-long.png"
              name="Lazco Ltd."
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
}
