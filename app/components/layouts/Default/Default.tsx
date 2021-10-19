import Head from 'next/head';
import Header from '@module/Header/Header';
import styles from './Default.module.scss';

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => (
  <div>
    <Head>
      <title>{'Infotition Next.js Boilerplate'}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.default}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  </div>
);

export default Default;
