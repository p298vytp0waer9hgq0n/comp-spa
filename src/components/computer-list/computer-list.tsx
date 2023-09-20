import { Dispatch, SetStateAction } from 'react';
import { Computer } from '../../utils/types';
import ComputerRow from '../computer-row/computer-row';
import RowCheckbox from '../row-checkbox/row-checkbox';

import styles from './computer-list.module.css';

type ComputerListProps = {
  computers: Array<Computer>;
  checked: Set<string>;
  setChecked: Dispatch<SetStateAction<Set<string>>>;
};

export default function MyComputers({
  computers,
  checked,
  setChecked,
}: ComputerListProps) {
  function handleCheckAll() {
    if (computers.length === checked.size) {
      setChecked(new Set());
    } else {
      const res = new Set<string>();
      computers.forEach((computer) => res.add(computer._id));
      setChecked(res);
    }
  }

  const elements = computers.map((computer) => (
    <ComputerRow
      {...computer}
      checked={checked.has(computer._id)}
      setChecked={setChecked}
      key={computer._id}
    />
  ));

  const columns = [
    'Название',
    'Тип',
    'Расположение',
    'Инв.номер',
    'Теги',
    'Дата создания',
    'Дата обновления',
    'Дата аудита',
  ];

  return (
    <div className={styles.container}>
      <div className={styles['table-head']}>
        <RowCheckbox
          extraClass={styles.check}
          check={checked.size > 0 && computers.length === checked.size}
          onClick={() => handleCheckAll()}
        />
        {columns.map((column, index) => (
          <p className={styles['table-head__text']} key={`${index}${column}`}>
            {column}
          </p>
        ))}
      </div>
      {elements}
    </div>
  );
}
