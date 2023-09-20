import { Dispatch, SetStateAction, useState } from 'react';
import styles from './per-page-selector.module.css';

type TProps = {
  perPage: number;
  setPerPage: Dispatch<SetStateAction<number>>;
};

const ChevronBigIcon = (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 9.42017L12 16.4202L5 9.42017"
      stroke={'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PerPageSelector({ perPage, setPerPage }: TProps) {
  const [opened, setOpened] = useState<boolean>(false);

  function selectPerPage(value: number) {
    setPerPage(value);
    setOpened(false);
  }

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setOpened((value) => !value)}
      >
        {perPage}
        {ChevronBigIcon}
      </button>
      <div
        className={
          opened ? `${styles.panel} ${styles['panel-active']}` : styles.panel
        }
      >
        <button
          type="button"
          className={styles.panel__button}
          onClick={() => selectPerPage(10)}
        >
          10
        </button>
        <button
          type="button"
          className={styles.panel__button}
          onClick={() => selectPerPage(20)}
        >
          20
        </button>
        <button
          type="button"
          className={styles.panel__button}
          onClick={() => selectPerPage(30)}
        >
          30
        </button>
      </div>
    </div>
  );
}
