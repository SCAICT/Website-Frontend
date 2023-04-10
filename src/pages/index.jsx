import Image from 'next/image'

import style from '../styles/Home.module.scss'
import LinkBar from '@/components/Home/LinkBar'

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.contain}>
        <Image
          src={"/images/scaictLogo.png"}
          width={280}
          height={112}
          loading="lazy"
        ></Image>
        <h1>中部電資聯合會議</h1>
        <h2>Student's Clubs Alliance of Information in Central Taiwan</h2>
        <LinkBar></LinkBar>
      </div>
    </div>
  )
}