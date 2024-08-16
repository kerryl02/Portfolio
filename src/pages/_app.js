import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const roboto = Roboto({
  subsets: ['latin'],
  variable: "--font-robot"
})

export default function App({ Component, pageProps }) {
  return
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${roboto.variable} font-robot bg-light w-full min-h-screen`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  </>
}
