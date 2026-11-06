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

export const kits = [
  {
    title: 'IRIV EdgeAI Safety Box Kit',
    tag: 'EdgeAI CM5 · 26 TOPS',
    link: '/docs/kits/iriv-edgeai-safety-box-kit',
    image: 'https://static.cytron.io/image/cache/catalog/products/KIT-IRIV-EAI-PPE/safety-box-b-500x500.png',
    description:
      'Ready-to-deploy PPE and danger-zone detection for up to 6 RTSP IP cameras, in an IP67 enclosure with alarm outputs.',
  },
  {
    title: 'IRIV PiControl Industry 4.0 Agribox',
    tag: 'PiControl CM4 + IO Controller',
    link: '/docs/kits/iriv-picontrol-agribox',
    image: 'https://static.cytron.io/image/cache/catalog/products/KIT-IRIV-AGRBX2/4-500x500.png',
    description:
      'Smart-agriculture control box with 5 relays, RS485 soil and climate sensors, and the MyAgritech dashboard.',
  },
  {
    title: 'IRIV PiControl Industry 4.0 Training Kit & Workshop',
    tag: 'PiControl CM4 · Workshop',
    link: '/docs/kits/iriv-picontrol-industry40-training',
    image: 'https://static.cytron.io/image/cache/catalog/products/V-KIT-IRIV/iriv-training-kit-new-main-500x500.png',
    description:
      'DIN-rail training panel with RS485 sensor and power meter, sold alone or with a 2-day Node-RED / Modbus / IoT workshop.',
  },
  {
    title: 'IRIV EdgeAI Industry 4.0 Vision Training',
    tag: 'EdgeAI CM5 · 13 TOPS · Workshop',
    link: '/docs/kits/iriv-edgeai-vision-training',
    image: 'https://static.cytron.io/image/cache/catalog/products/V-KIT-IRIV-EAI/edge-ai-kit-a-500x500.png',
    description:
      'Two-day Edge AI vision workshop with a take-home EdgeAI training kit: Hailo pipelines, custom models, Node-RED and Blynk.',
  },
];

function Card({title, tag, image, link, description}) {
  const src = useBaseUrl(image || '/');
  return (
    <Link to={link} className={styles.card}>
      {image && (
        <div className={styles.imageWrap}>
          <img src={src} alt={title} loading="lazy" />
        </div>
      )}
      <span className={styles.tag}>{tag}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.cta}>Open documentation →</span>
    </Link>
  );
}

export default function ProductCards({items = products}) {
  return (
    <div className={styles.grid}>
      {items.map((p) => (
        <Card key={p.title} {...p} />
      ))}
    </div>
  );
}
