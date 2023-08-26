import Head from 'next/head'
import Header from '@/layout/header'
import Footer from '@/layout/footer'
import 'styles/globals.css'
import 'styles/layout.css'

export default function App({ Component, pageProps }) {
  
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name='description' content='Free tutorials on web development'/>
      </Head>    
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )  
}