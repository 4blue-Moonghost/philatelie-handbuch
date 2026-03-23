import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1">📮 Philatelie-Manager Handbuch</Heading>
        <p className="hero__subtitle">
          Alles was du über die App wissen musst — von der Installation bis zum eBay-Listing
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs">
            📖 Zum Handbuch
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/ebay/ebay-einrichten" style={{marginLeft: '1rem'}}>
            🛒 eBay einrichten
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    emoji: '📦',
    title: 'Sammlung verwalten',
    description: 'Erfasse deine Briefmarken, Blocks, FDCs und mehr. Mit Bildern, Michel-Nummern und Zustandsbeschreibungen.',
    link: '/docs/artikel/artikel-anlegen',
  },
  {
    emoji: '🖨️',
    title: 'Scanner-Integration',
    description: 'Digitalisiere deine Briefmarken direkt mit WIA- oder eSCL-Scannern. Unterstützt Canon, HP und viele mehr.',
    link: '/docs/scanner/scanner-verbinden',
  },
  {
    emoji: '🛒',
    title: 'eBay-Integration',
    description: 'Stelle Artikel direkt bei eBay ein. Automatische Kategorie-Zuweisung nach Land und Jahr.',
    link: '/docs/ebay/ebay-einrichten',
  },
  {
    emoji: '📦',
    title: 'Versand',
    description: 'Versandkosten automatisch berechnen mit DHL, Deutsche Post und weiteren Anbietern.',
    link: '/docs',
  },
  {
    emoji: '🔑',
    title: 'Lizenz aktivieren',
    description: 'Von Free bis HÄNDLER — finde das richtige Lizenzmodell für deine Sammlung.',
    link: '/docs/lizenz/lizenz-aktivieren',
  },
  {
    emoji: '🌍',
    title: '32 Sprachen',
    description: 'Die App ist in 32 Sprachen verfügbar und wird ständig weiterentwickelt.',
    link: '/docs',
  },
];

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Handbuch" description="Philatelie-Manager Handbuch und Anleitung">
      <HomepageHeader />
      <main>
        <section style={{padding: '3rem 0'}}>
          <div className="container">
            <div className="row">
              {features.map((f, i) => (
                <div key={i} className="col col--4" style={{marginBottom: '2rem'}}>
                  <div className="card" style={{height: '100%', padding: '1.5rem'}}>
                    <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>{f.emoji}</div>
                    <h3>{f.title}</h3>
                    <p style={{color: '#666'}}>{f.description}</p>
                    <Link to={f.link} className="button button--outline button--sm button--primary">
                      Mehr erfahren →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
