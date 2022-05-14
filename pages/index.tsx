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

      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl mb-4">Mango Sh🥭t</h1>
        <h2 className="text-2xl mb-20">
          Simple tool to take screenshots, annotate and share.
        </h2>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Install in Chrome
        </button>
      </main>
      {/* <footer></footer> */}
    </div>
  );
};

export default Home;
