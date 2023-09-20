import { Dispatch, ReactNode, SetStateAction, useMemo } from 'react';
import styles from './page-control.module.css';

type TPageControlProps = {
  page: number;
  count: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

export default function PageControl({
  page,
  count,
  setCurrent,
}: TPageControlProps) {
  const pages = useMemo(() => {
    const res: ReactNode[] = [];
    for (let i = 1; i <= count; i++) {
      const style =
        page === i ? `${styles.page} ${styles.page_active}` : styles.page;
      res.push(
        <button
          type="button"
          key={i}
          className={style}
          onClick={() => setCurrent(i)}
        >
          {i}
        </button>
      );
    }
    return res;
  }, [count, page]);
  return (
    <div className={styles.container}>
      <div className={styles.pages}>{pages}</div>
      <div className={styles.navbuttons}>
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setCurrent((current) => --current)}
          className={styles.navbutton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12.15 15.834 6.317 10l5.833-5.833"
            />
          </svg>
        </button>
        <button
          type="button"
          disabled={count < 2 || page === count}
          onClick={() => setCurrent((current) => ++current)}
          className={styles.navbutton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            transform="rotate(180)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12.15 15.834 6.317 10l5.833-5.833"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
