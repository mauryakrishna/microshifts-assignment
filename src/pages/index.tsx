import Head from 'next/head';

import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
  const res = await fetch(
    `https://inshortsapi.vercel.app/news?category=science`,
  );
  const data = await res.json();
  return { props: { newsList: data.success ? data.data : [] } };
}

export default function Home(data: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>InShorts News</title>
        <meta
          name="description"
          content="News sourced from Inshort news api."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to InShort news!</h1>
        <div className={styles.list}>
          {data.newsList.map((news: any, index: number) => {
            return (
              <div key={index} className={styles.card}>
                <div className={styles.text}>
                  <h4>{news.title}</h4>
                  <p>{news.content}</p>
                </div>
                <div className={styles.imagediv}>
                  <img
                    className={styles.image}
                    alt={news.title}
                    src={news.imageUrl}
                    height="100%"
                    width="100%"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
