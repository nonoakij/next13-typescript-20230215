import Head from "next/head";
import Link from "next/link";
import styles from "~/styles/Home.module.css";
const SPACES = ["1", "2", "3", "4", "5"];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul>
          {SPACES.map((id) => {
            return (
              <li key={id} style={{ marginTop: "16px" }}>
                <Link href={`/${id}`}>Go to {id} page</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
