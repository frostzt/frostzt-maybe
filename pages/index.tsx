import Head from "next/head";
import { GetStaticProps } from "next";
import styles from "../styles/Home.module.scss";

// Components
import Header from "../Components/Header/Header";
import { getSortedPostsData } from "../lib/posts";

const HomePage: React.FC<any> = ({ allPostsData }) => {
  console.log(allPostsData[0]);

  const {} = allPostsData[0];

  return (
    <div className={styles.container}>
      <Head>
        <title>frostzt - maybe</title>
        <meta name="description" content="frostzt's personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.container}></div>
      </main>
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
