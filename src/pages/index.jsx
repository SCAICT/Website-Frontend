import Image from 'next/image';

import style from '../styles/Home.module.scss';
import ContentBlock from '@/components/contents/ContentBlock';
import { useRef, useState } from 'react';
import { __stylePageLeaved, __stylePageEntered } from '@/styles/script.style';

export default function Home() {
  const [pageStyle, setPageStyle] = useState(__stylePageLeaved);
  const [inPage, setInPage] = useState('clubs');
  const setDisplay = (page) => {
    setPageStyle(__stylePageEntered);
    setInPage(page);
  };
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
          <h2>Student's Clubs Alliance of Information in Central Taiwan</h2>
          <div className={style.linkbar}>
            <span className={style.link} onClick={() => setDisplay('clubs')}>
              參與社團
            </span>
            <span className={style.link} onClick={() => setDisplay('members')}>
              歷屆成員
            </span>
            <span className={style.link} onClick={() => setDisplay('articles')}>
              社群文章
            </span>
            <span className={style.link} onClick={() => setDisplay('inside')}>
              內部分組
            </span>
            <span className={style.link} onClick={() => setDisplay('recent')}>
              近期活動
            </span>
            <span className={style.link} onClick={() => setDisplay('sponsor')}>
              贊助單位
            </span>
          </div>
        </div>
      </div>
      <div style={pageStyle}>
        <ContentBlock page={inPage}></ContentBlock>
      </div>
    </div>
  );
}
