import Head from 'next/head';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <Head>
        <title>Scaict - 中部電資聯合會議</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
