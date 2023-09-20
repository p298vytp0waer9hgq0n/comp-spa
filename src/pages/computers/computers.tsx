import { useEffect, useState } from 'react';
import { LoaderFunctionArgs, useLoaderData, useSubmit } from 'react-router-dom';

import { Computer } from '../../utils/types';
import PageControl from '../../components/page-control/page-control';
import PerPageSelector from '../../components/per-page-selector/per-page-selector';
import useFakeComputers from '../../hooks/use-fake-computers';
import MyComputers from '../../components/computer-list/computer-list';
import SearchForm from '../../components/search-form/search-form';

import styles from './computers.module.css';

type FilterData = {
  filter: string;
  type: string;
  tag: string[];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const filter = url.searchParams.get('filter');
  const type = url.searchParams.get('type');
  const tagParam = url.searchParams.get('tag');
  const tag = tagParam ? JSON.parse(tagParam) : [];
  return { filter, type, tag };
}

export default function Computers() {
  const { filter, type, tag } = useLoaderData() as FilterData;
  const submit = useSubmit();
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [total, setTotal] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(10);
  const [current, setCurrent] = useState<number>(1);
  const [computers, setComputers] = useState<Array<Computer>>([]);
  const { getComputers } = useFakeComputers();

  function refreshComputers() {
    const res = getComputers(
      perPage,
      (current - 1) * perPage,
      filter,
      type,
      tag
    );
    setComputers(res.computers);
    setChecked(new Set());
    setTotal(res.total);
  }
  useEffect(() => {
    if (current > 1 && current > Math.ceil(total / perPage)) setCurrent(1);
    refreshComputers();
  }, [current, perPage, filter, type, tag]);

  return (
    <section>
      <h1 className={styles.title}>Серверы и ПК</h1>
      <div className={styles.filter}>
        <span>
          {computers.length > 0
            ? `Записи ${(current - 1) * perPage + 1}-${
                (current - 1) * perPage + computers.length
              } из ${total}`
            : 'Не найдено'}
        </span>
        <SearchForm submit={submit} filter={filter} type={type} tag={tag} />
      </div>
      <MyComputers
        computers={computers}
        checked={checked}
        setChecked={setChecked}
      />
      <div className={styles['page-control']}>
        <PageControl
          page={current}
          count={Math.ceil(total / perPage)}
          setCurrent={setCurrent}
        />
        <div className={styles['row-number']}>
          <p className={styles['page-selector-label']}>Количество записей:</p>
          <PerPageSelector perPage={perPage} setPerPage={setPerPage} />
        </div>
      </div>
    </section>
  );
}
