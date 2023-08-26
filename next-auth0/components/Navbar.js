import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/react'

export default function Navbar() {
  const {data: session, status} = useSession()
  //console.log('session => ', session)
  console.log('status => ', status)
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={`main-nav ${!session && status === 'loading' ? 'loading' : 'loaded'}`}>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            Blog
          </Link>
        </li>
        
        {status !== 'authenticated' && !session && (
        
        <li>
          <Link href='/api/auth/signin' legacyBehavior>
            <a onClick={ e => {
              e.preventDefault()
              signIn('github')
              }}>Sign In</a>
          </Link>
        </li>
        )}
        
        {status !== 'unauthenticated' && session && (
        
        <li>
          <Link href='/api/auth/signout' legacyBehavior>
          <a onClick={ e => {
              e.preventDefault()
              signOut()
              }}>Sign Out</a>
          </Link>
        </li>
        )}
      </ul>
    </nav>
  )
}