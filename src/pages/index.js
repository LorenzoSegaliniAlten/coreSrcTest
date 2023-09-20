import Head from 'next/head'
import TestComp1 from '@components/TestComp1'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <TestComp1 />
      </div>
    </>
  )
}
