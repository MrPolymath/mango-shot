import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

const Image: NextPage = () => {
  const router = useRouter();
  const { uuid } = router.query;
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

      <main className="flex justify-between items-center">
        <div>
          <h1>Mango Shot</h1>
          <h2>{uuid}</h2>
        </div>
        <div className="flex items-center">
          <h2>Tools:</h2>
          <div className="flex items-center">add notes</div>
        </div>
      </main>
      {/* <footer></footer> */}
    </div>
  );
};

export default Image;
