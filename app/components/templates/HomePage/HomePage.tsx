import styles from './HomePage.module.scss';

const HomePage = () => (
  <div className={styles.content}>
    <h1 className={styles.title}>
      Infotition Next.js Boilerplate{' '}
      <span role="img" aria-label="Light Bulb">
        💡
      </span>
    </h1>
    <span className={styles.author}>
      Made by{' '}
      <a
        href={'https://github.com/Infotition'}
        target="_blank"
        rel="noreferrer"
      >
        infotiton
      </a>
    </span>
  </div>
);

export default HomePage;
