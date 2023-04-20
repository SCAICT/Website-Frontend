import Image from 'next/image'

import style from '../styles/Home.module.scss'
import ContentBlock from '@/components/contents/ContentBlock'
import { useState } from 'react'
import { __stylePageLeaved, __stylePageEntered } from '@/styles/script.style'

export default function Home() {
  const [pageStyle, setPageStyle] = useState(__stylePageLeaved);
  const setDisplay = () => {
    setPageStyle(__stylePageEntered);
  }
  return (
    <div className={style.wrap}>
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
          <div className="linkbar mt-20 flex flex-row flex-wrap gap-5 items-center justify-center">
            <span className={style.link} onClick={setDisplay}>參與社團</span>
            <span className={style.link} onClick={setDisplay}>歷屆成員</span>
            <span className={style.link} onClick={setDisplay}>社群文章</span>
            <span className={style.link} onClick={setDisplay}>內部分組</span>
            <span className={style.link} onClick={setDisplay}>近期活動</span>
            <span className={style.link} onClick={setDisplay}>贊助單位</span>
          </div>
        </div>
      </div>
      <div style={pageStyle}>
        <ContentBlock></ContentBlock>
      </div>
    </div>
  )
}