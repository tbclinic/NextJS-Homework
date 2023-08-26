import Head from 'next/head'

export default function Blog({ title, description}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <h1 className='content'>Env Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID} {process.env.DB_PASSWORD}</h1>
    </>
  )
}

export async function getServerSideProps() {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD
  
  console.log(`Connecting to database with username ${user} and password ${password}`)

  return {
    props: {
      title: 'Article Title',
      description: 'Article Description',
    },
  }
}