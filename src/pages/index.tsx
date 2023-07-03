import Image from 'next/image';
import Link from 'next/link';

import style from '../styles/Home.module.scss';

import React, { ReactNode } from 'react';
import Clubs from './clubs';
import Articles from './articles';
import Team from './teams';
import Activities from './activities';
import Sponsor from './sponsors';

type SectionProps = {
  id: string;
  children: ReactNode;
};

const Section = ({ id, children }: SectionProps) => (
  <div
    id={id}
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      scrollSnapAlign: 'start',
    }}
  >
    {children}
  </div>
);

export default function Home() {
  const linkList = [
    {
      name: '首頁',
      route: '/#main',
    },
    {
      name: '參與社團',
      route: '/#clubs',
    },
    {
      name: '社群文章',
      route: '/#articles',
    },
    {
      name: '內部分組',
      route: '/#teams',
    },
    {
      name: '近期活動',
      route: '/#activities',
    },
    {
      name: '贊助廠商',
      route: '/#sponsors',
    },
  ];
  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
      }}
    >
      <Section id="main">
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
            <h2>
              Student&#39;s Clubs Alliance of Information in Central Taiwan
            </h2>
            <Link
              href={'/#activities'}
              className="px-10 py-2 mt-4 text-xl font-thin transition bg-green-400 border border-green-400 rounded-full hover:bg-transparent hover:text-green-400"
            >
              查看近期活動
            </Link>
          </div>
        </div>
      </Section>
      <Section id={linkList[1].route.split("#")[1]}>
        <Clubs />
      </Section>
      <Section id={linkList[2].route.split("#")[1]}>
        <Articles />
      </Section>
      <Section id={linkList[3].route.split("#")[1]}>
        <Team />
      </Section>
      <Section id={linkList[4].route.split("#")[1]}>
        <Activities />
      </Section>
      <Section id={linkList[5].route.split("#")[1]}>
        <Sponsor />
      </Section>
    </div>
  );
}
