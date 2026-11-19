import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

// Adds a "Found a mistake? Tell us" line under every doc page.
// It opens an email to Cytron support with the page title and address filled in.
export default function FooterWrapper(props) {
  const {metadata} = useDoc();
  const {siteConfig} = useDocusaurusContext();
  const pageUrl = siteConfig.url + metadata.permalink;
  const subject = `Wiki feedback: ${metadata.title}`;
  const body = `Page: ${pageUrl}\n\nWhat is wrong or missing:\n\n`;
  const href = `mailto:support@cytron.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <>
      <Footer {...props} />
      <div className={styles.feedback}>
        <span>Found a mistake or something missing on this page?</span>{' '}
        <a href={href}>Tell us</a>
      </div>
    </>
  );
}
