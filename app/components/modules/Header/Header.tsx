import Icon, { Icons } from '@element/Icon/Icon';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <span className={styles.socials} data-cy={'header-socials'}>
      <a
        href={'https://github.com/Infotition/next.js-boilerplate'}
        rel="noreferrer noopener"
        target={'_blank'}
      >
        <Icon icon={Icons.GITHUB} alt={'GitHub'} />
      </a>
      <a
        href={'https://discord.gg/NpxrDGYDwV'}
        rel="noreferrer noopener"
        target={'_blank'}
      >
        <Icon icon={Icons.DISCORD} alt={'Discord'} />
      </a>
      <a
        href={'http://infotition.de'}
        rel="noreferrer noopener"
        target={'_blank'}
      >
        <Icon icon={Icons.WEB} alt={'Website'} />
      </a>
    </span>
  </header>
);

export default Header;
