import Head from 'next/head';


export default function Layout({title}) {
    return (
        <div>
           <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
            
      </main>
 
        </div>
    )
}
