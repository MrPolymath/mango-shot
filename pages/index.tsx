import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mango Shot</title>
        <meta
          name="description"
          content="Simple tool to take a screenshot, annotate it and share it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Mango Shot</h1>
      </main>
      {/* <footer></footer> */}
    </div>
  );
};

export default Home;
