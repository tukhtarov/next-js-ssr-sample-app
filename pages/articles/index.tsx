import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { IArticlesProps } from '../../types'

import { server } from '../../config';

import styles from './articles.module.css'

export const Articles = ({ data }: IArticlesProps) => {
  return (
    <div>
      <Head>
        <title>All articles</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
      <h1>Articles</h1>
      {data.map((item) => {
        return (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <div className={styles.row}>
            <Link href={`/articles/${item.id}`}>
              <img src={item.image} className={styles.articleImage} alt={item.title}></img>
            </Link>
            <div>
              {item.description.substring(0, 200) + '... '}
              <Link href={`/articles/${item.id}`}>
                <a>Read more</a>
              </Link>
            </div>
          </div>   
        </div>
        )
      })}
      </main>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const data = await res.json()

  return { props: { data } }
}


export default Articles