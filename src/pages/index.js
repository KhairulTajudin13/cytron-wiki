import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProductCards, {kits} from '@site/src/components/ProductCards';
import styles from './index.module.css';

const quickLinks = [
  {
    title: 'Get started',
    text: 'Power, first boot and setup for each controller.',
    links: [
      ['PiControl', '/docs/products/iriv-picontrol/getting-started'],
      ['IO Controller', '/docs/products/iriv-io-controller/getting-started'],
      ['SmartHub CM5', '/docs/products/iriv-smarthub-cm5/getting-started'],
      ['EdgeAI CM5', '/docs/products/iriv-edgeai-cm5/getting-started'],
    ],
  },
  {
    title: 'Wiring & I/O',
    text: 'Terminal pinouts, GPIO mapping and wiring rules.',
    links: [
      ['PiControl terminals', '/docs/products/iriv-picontrol/terminal-1'],
      ['IO Controller I/O', '/docs/products/iriv-io-controller/io-reference'],
      ['EdgeAI I/O', '/docs/products/iriv-edgeai-cm5/io-reference'],
    ],
  },
  {
    title: 'Learn & build',
    text: 'Cytron tutorials, Node-RED and AI vision projects.',
    links: [
      ['Node-RED on PiControl', '/docs/products/iriv-picontrol/node-red/'],
      ['EdgeAI AI Quickstart', '/docs/products/iriv-edgeai-cm5/ai-quickstart'],
      ['All Cytron tutorials', 'https://my.cytron.io/tutorial'],
    ],
  },
  {
    title: 'Fix a problem',
    text: 'Common issues, checks and support contacts.',
    links: [
      ['PiControl', '/docs/products/iriv-picontrol/troubleshooting'],
      ['IO Controller', '/docs/products/iriv-io-controller/troubleshooting'],
      ['SmartHub CM5', '/docs/products/iriv-smarthub-cm5/troubleshooting'],
      ['EdgeAI CM5', '/docs/products/iriv-edgeai-cm5/troubleshooting'],
    ],
  },
];

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Specs, wiring, setup and troubleshooting for the Cytron IRIV industrial controller series.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/products/">
            Browse products
          </Link>
          <Link className={clsx("button button--outline button--lg", styles.ghostButton)} href="https://my.cytron.io/tutorial">
            Cytron tutorials
          </Link>
        </div>
        <p className={styles.searchHint}>
          Tip: press <kbd>Ctrl</kbd> + <kbd>K</kbd> to search the whole wiki.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Technical documentation for Cytron IRIV industrial controllers: IRIV PiControl, IO Controller, SmartHub CM5 and EdgeAI CM5.">
      <Hero />
      <main className="container margin-vert--lg">
        <h2 className={styles.sectionTitle}>Products</h2>
        <ProductCards />
        <h2 className={styles.sectionTitle}>Kits &amp; Solutions</h2>
        <p className={styles.sectionIntro}>Ready-made kits and training bundles built on the IRIV controllers.</p>
        <ProductCards items={kits} />
        <h2 className={styles.sectionTitle}>Find what you need</h2>
        <div className={styles.quickGrid}>
          {quickLinks.map((q) => (
            <div key={q.title} className={styles.quickCard}>
              <h3>{q.title}</h3>
              <p>{q.text}</p>
              <ul>
                {q.links.map(([label, to]) => (
                  <li key={label}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
