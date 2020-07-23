import Head from "next/head";
import { Page, Text, Card, Row } from "@zeit-ui/react";

import { getIssues } from '../lib/issues'

export default function Home({ allIssues }) {
  // console.log(allIssues)
  const issueCards = allIssues.map(({html_url, id, title, labels, created_at, updated_at}, index) => (
    <Card shadow key={id}>
      <h3><a href={html_url}>{title}</a></h3>
    </Card>
  ))
  return (
    <Page>
      <Head>
        <title>Ideas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text h1>
        Welcome to <a href="#">Ideas</a>
      </Text>
      {issueCards}
    </Page>
  );
}


export async function getServerSideProps() {
  const allIssues = await getIssues()
  console.log(allIssues)
  return {
    props: {
      allIssues
    }
  }
}