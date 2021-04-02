import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { server } from '../../config';

import { IArticleProps } from '../../types'

import styles from './article.module.css'

export const Article = ({ data }: IArticleProps) => {
  if (!data) return <div>Not found</div>;
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Link href={`/articles`}>
          <a>Home page</a>
        </Link>
        <h1>{data.title}</h1>
        <img src={data.image} className={styles.articleImage} alt={data.title}></img>
        <div>{data.description}</div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query;

  const res = await fetch(`${server}/api/articles/${id}`)
  const data = await res.json()

  return { props: data }
}

export default Article