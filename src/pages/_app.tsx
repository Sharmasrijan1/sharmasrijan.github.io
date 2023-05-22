import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useLanyardWS } from 'use-lanyard';
import { createContext } from 'react';

const DISCORD_ID = '481243928545329159' // sharmasrijan#7005

export const AppContext = createContext<ReturnType<typeof useLanyardWS> | null>(null);

function MyApp({ Component, pageProps }: AppProps) {

  const lanyard = useLanyardWS(DISCORD_ID);

  return (
  <AppContext.Provider value={lanyard}>
    <Head>
      <meta charSet="utf-8"/>
      <meta name="description" content="HighSchool student, intermediate programmer, 15 year's old and an anime otaku"/>
      <meta name="author" content="Sharmasrijan"/>
      <meta name="keywords" content="Sharmasrijan, development, anime, information technology, software, github, gitlab, LUA, ReactJS"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
    </Head>
    <Component {...pageProps} />
  </AppContext.Provider>
  )
}

export default MyApp
