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
        <h1 className={styles.title}>James Wong</h1>
        <h1>
          (designer)+{"<"}developer{">"}
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
          products around him. When not tinkering, you can find him buried in a
          book or taking long walks in the park while listening to John Mayer.
        </p>
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
