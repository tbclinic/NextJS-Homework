import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href='/users'>Users</Link>
      <hr />
      <Link href='/posts'>Posts</Link>
      <hr />
      <Link href='/products'>Products</Link>
  </>
  )
}

export default Home