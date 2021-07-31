import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

// must export as default
export default function FirstPost() {
    return (
        <>
            {/* layout component like in php */}
            <Layout>
                 {/* to modified the header */}
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>First Post</h1>
                {/* image section will be change */}
                <img src="/images/profile.jpg" alt="Your Name" />
                {/* using LINK for client side rendering */}
                {/* <h2>
                    <Link href="/">
                    <a>Back to home</a>
                    </Link>
                </h2> */}
            </Layout>
        </>
      )
}