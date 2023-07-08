import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeBanner from '@site/src/components/HomeBanner';
import QuickStart from '@site/src/components/QuickStart';
import Libraries from '@site/src/components/Libraries';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description={siteConfig.tagline}>
      <HomeBanner />
      <main>
        <QuickStart />
        <Libraries />
      </main>
    </Layout>
  );
}
