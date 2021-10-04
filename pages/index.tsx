import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Wong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          James Wong
          {/* (designer)+{'<'}developer{'>'} */}
        </h1>

        <p className={styles.description}>
          James is a developer based in Sydney, Australia. Currently, he is
          undertaking a Bachelor of Computer Science at the University of New
          South Wales. He has a passion in creatively integrating technology
          into solving everyday problems. From simple products to websites and
          mobile apps, he is able to build them all.
          <br />
          <br />
          In his down time, he enjoys disassembling and modifying the different
          products around him. When not tinkering, you can find him digging hard
          into a book or taking long walks in the park while listening to John
          Mayer.
        </p>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <div
          style={{
            justifyItems: "center",
            textAlign: "center",
            color: "grey",
          }}
        >
          <p>
            [ Built using TypeScript + Next.js ]
            <br />
            Copyright &#169; 2021. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
