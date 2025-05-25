import Link from 'next/link';

import * as styles from './styles.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div></div>
      <nav>
        <ul className={styles.item}>
          <li className={styles.item}>
            <Link href="/">소개</Link>
          </li>
          <li className={styles.item}>
            <Link href="/auth">로그인</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
