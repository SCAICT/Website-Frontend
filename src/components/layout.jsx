import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Scaict - 中部電資聯合會議</title>
      </Head>
      <div>
        {children}
      </div>
    </>
  )
}