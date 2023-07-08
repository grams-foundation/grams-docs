import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeBanner from '@site/src/components/HomeBanner';
import QuickStart from '@site/src/components/QuickStart';
import Libraries from '@site/src/components/Libraries';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={siteConfig.tagline}>
      <HomeBanner />
      <div class="alert alert--primary" role="alert">
        The alpha release is using a faucet that can fund any wallet for free!
      </div>
      <main>
        <QuickStart />
        <Libraries />
      </main>
    </Layout>
  );
}
