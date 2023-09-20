import { Dispatch, SetStateAction } from 'react';
import { Computer } from '../../utils/types';
import formatDate from '../../utils/format-date';
import RowCheckbox from '../row-checkbox/row-checkbox';

import styles from './computer-row.module.css';
import Tag from '../tag/tag';

type ComputerRowProps = Computer & {
  checking?: boolean;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<Set<string>>>;
  extraClass?: string;
};

export default function ComputerRow({
  _id,
  active,
  name,
  type,
  location,
  recNumber,
  tags,
  created,
  updated,
  audited,
  checked = false,
  setChecked,
  extraClass = '',
  checking = true,
}: ComputerRowProps) {
  const tagList = tags.map((tag) => <Tag tag={tag} key={`${_id}${tag}`} />);
  return (
    <div className={`${styles.row} ${extraClass}`}>
      <RowCheckbox
        check={checked}
        extraClass={
          checking
            ? styles.check
            : `${styles.check} ${styles['check_mobile-invisible']}`
        }
        onClick={() =>
          setChecked((set) => {
            const newSet: Set<string> = new Set(set.values());
            if (newSet.has(_id)) {
              newSet.delete(_id);
            } else {
              newSet.add(_id);
            }
            return newSet;
          })
        }
      />
      <div className={`${styles.dot} ${active ? styles.active : ''}`}></div>
      <p className={styles.common}>{name}</p>
      <p className={styles.common}>{type}</p>
      <p className={styles.common}>{location}</p>
      <p className={styles.common}>{recNumber || '-'}</p>
      <p className={styles.common}>{tagList}</p>
      <p className={styles.common}>{formatDate(created)}</p>
      <p className={styles.common}>{formatDate(updated)}</p>
      <p className={styles.common}>{formatDate(audited)}</p>
    </div>
  );
}
