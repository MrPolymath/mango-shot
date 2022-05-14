import type { NextPage, getServerSideProps, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  //   const res = await fetch(`https://localhost/api/save-image`)
  //   const data = await res.json()
  // Pass data to the page via props
  //   return { props: { data } }
};

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

      <main className="flex items-center">
        <div className="flex justify-center items-center">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c15d.png"
            alt="mango"
          />
        </div>
        <div className="flex items-center">
          {/* <h2>Tools:</h2>
          <div className="flex items-center">add notes</div> */}
        </div>
      </main>
      {/* <footer></footer> */}
    </div>
  );
};

export default Image;
