import '../styles/index.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
          <meta property="og:site_name" content="mr tidy" key="ogsitename" />
          {/* twitter */}
          <meta name="twitter:card" content="/Mr Tidy Logo A.png" key="ogimage" />
          <meta name="twitter:title" content="welcome to the website of mr tidy" />
          <meta name="twitter:description" content="mr tidy" />
          <meta name="twitter:image" itemProp="image"  content="/Mr Tidy Logo A.png" key="ogimage" />
          {/* web icon */}
          <meta property="og:title" content="welcome to the website of mr tidy" />
          <meta property="og:description" content="mr tidy" />
          <meta property="og:image" itemProp="image" content="/Mr Tidy Logo A.png" key="ogimage" />
          <meta property="og:updated_time" content="updatedtime" />
          {/*  */}
          <link itemProp="thumbnailUrl" href="/favicon.ico" /> 
          <meta property="og:image:type" content="image/jpeg" />
          
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
