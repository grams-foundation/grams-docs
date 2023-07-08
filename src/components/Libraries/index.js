import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import Card from '@site/src/components/Card';

import styles from './styles.module.css';

const CardList = [
  {
    title: 'Grams SDK',
    Svg: require('@site/static/img/libraries/sdk.svg').default,
    description: 'Simplify Grams integration with a powerful SDK for seamless interaction and development.',
    link: '/docs/develop/libraries/grams-sdk'
  },
  {
    title: 'Grams Subjects',
    Svg: require('@site/static/img/libraries/subject.svg').default,
    description: 'Compose and build subjects, the first decentralized subject-oriented programming framework.',
    link: '/docs/develop/libraries/grams-subjects'
  },
  {
    title: 'Grams Contracts',
    Svg: require('@site/static/img/libraries/contracts.svg').default,
    description: 'Unlock the potential of smart contracts for decentralized application development on Grams.',
    link: '/docs/develop/libraries/grams-contracts'
  },
  {
    title: 'window.Grams',
    Svg: require('@site/static/img/libraries/window.svg').default,
    description: 'Integrate Grams features into your applications using the window.Grams API.',
    link: '/docs/develop/libraries/window.grams'
  },
  {
    title: 'Grams for Unity',
    Svg: require('@site/static/img/libraries/unity.svg').default,
    description: 'Add Grams to your Game using different examples in the Asset Store for free.',
    link: '/docs/develop/libraries/grams-unity'
  },
];



export default function Libraries() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.header}>Core Libraries</h2>
        <div className="row">
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} small />
          ))}
        </div>
      </div>
    </section>
  );
}
