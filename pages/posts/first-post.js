import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>i am happy</title>
      </Head>
      <h1>First Post</h1>
      <h1>
        go back
        <Link href="/">
          <a> home</a>
        </Link>
      </h1>
    </Layout>
  );
}
