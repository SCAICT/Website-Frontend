import Card from '../contents/sponsor/Card';
import Link from 'next/link';

export default function SponsorBlock() {
  return (
    <div className="bg-neutral-800 py-10">
      <h1 className="text-center text-3xl font-bold mb-10">贊助廠商</h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 px-4 animate__animated animate__fadeInUp duration-700	">
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
        <Link
          href={'/sponsors'}
          className="bg-neutral-700 mt-4 p-3 rounded-full w-12 h-12 flex items-center justify-center"
        >
          <i className="bx bx-dots-horizontal-rounded "></i>
        </Link>
      </div>
    </div>
  );
}
