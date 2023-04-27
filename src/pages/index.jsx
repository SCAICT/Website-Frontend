import Image from 'next/image';
import style from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={style.wrap}>
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
        </div>
      </div>
    </div>
  );
}
