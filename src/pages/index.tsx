import Image from 'next/image';
import Link from 'next/link';

import Introduction from '@/components/Home/introduction';
import ClubsBar from '@/components/Home/clubsBar';
import Footer from '@/components/Home/Footer';

import style from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.contain}>
        <Image
          src={'/images/scaictLogo.png'}
          width={280}
          height={112}
          loading="lazy"
          alt="SCAICT Logo"
        ></Image>
        <h1>中部電資聯合會議</h1>
        <h2>Student&#39;s Clubs Alliance of Information in Central Taiwan</h2>
        <Link
          href={'/activities'}
          className=" bg-green-400 rounded-full px-10 py-2 font-thin text-xl mt-4 border border-green-400 hover:bg-transparent hover:text-green-400 transition"
        >
          查看近期活動
        </Link>
      </div>
      <Introduction></Introduction>
      <ClubsBar></ClubsBar>
      <Footer></Footer>
    </div>
  );
}
