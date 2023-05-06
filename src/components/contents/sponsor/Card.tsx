import Image from 'next/image';

interface IProps {
  src: string;
  name: string;
}

export default function Card() {
  return (
    <div className="bg-neutral-900 px-5 py-3 max-w-xs rounded-lg flex flex-col items-center">
      <Image
        src={
          'https://raw.githubusercontent.com/Lazco-Team/Lazco-Website/main/public/images/logo-long.png'
        }
        height={280}
        width={640}
        alt="sponsor"
      ></Image>
      <p className="text-green-100/60 text-lg font-thin">Lazco Ltd.</p>
    </div>
  );
}
