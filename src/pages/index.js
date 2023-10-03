import Head from 'next/head'
import TestComp1 from '@components/TestComp1'
import TestComp2 from '@components/TestComp2'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <TestComp1 />
        <TestComp2 />
      </div>
    </>
  )
}
