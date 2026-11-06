import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export const products = [
  {
    title: 'IRIV PiControl',
    tag: 'Raspberry Pi CM4 / CM5',
    image: '/img/products/iriv-picontrol.png',
    link: '/docs/products/iriv-picontrol/',
    description:
      'Industrial controller with 4 isolated DI, 4 DO, 4 AI, isolated RS485 and RS232, dual Ethernet, in a DIN-rail metal enclosure.',
  },
  {
    title: 'IRIV IO Controller',
    tag: 'Raspberry Pi RP2350A',
    image: '/img/products/iriv-io-controller.png',
    link: '/docs/products/iriv-io-controller/',
    description:
      'Microcontroller I/O controller with 11 isolated DI, 4 DO, 2 AI, isolated RS485 and Ethernet. Programs in CircuitPython.',
  },
  {
    title: 'IRIV SmartHub CM5',
    tag: 'Raspberry Pi CM5',
    image: '/img/products/iriv-smarthub-cm5.png',
    link: '/docs/products/iriv-smarthub-cm5/',
    description:
      'Fanless edge computer and gateway with dual HDMI, USB 3.0, Gigabit Ethernet, M.2 NVMe and mini PCIe for 4G.',
  },
  {
    title: 'IRIV EdgeAI CM5',
    tag: 'Raspberry Pi CM5 + AI HAT+',
    image: '/img/products/iriv-edgeai-cm5.png',
    link: '/docs/products/iriv-edgeai-cm5/',
    description:
      'Edge AI controller with 13/26 TOPS AI HAT+, dual MIPI cameras, isolated I/O, LED lighting drivers and RS485.',
  },
];

function Card({title, tag, image, link, description}) {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={useBaseUrl(image)} alt={title} loading="lazy" />
      </div>
      <span className={styles.tag}>{tag}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.cta}>Open documentation →</span>
    </Link>
  );
}

export default function ProductCards() {
  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <Card key={p.title} {...p} />
      ))}
    </div>
  );
}
