import { Form, SubmitFunction, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchIcon from '../../icons/search';
import funnel from '../../icons/funnel';
import { compTags, compTypes } from '../../utils/constants';
import Tag from '../tag/tag';

import styles from './search-form.module.css';

type SearchFormProps = {
  submit: SubmitFunction;
  filter: string;
  type: string;
  tag: string[];
};

type Visibility = 'type' | 'tag' | null;

export default function SearchForm({
  submit,
  filter,
  type,
  tag,
}: SearchFormProps) {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [typeSelect, setTypeSelect] = useState<string>();
  const [tagSelect, setTagSelect] = useState<string[]>([]);
  const [visibility, setVisibiliy] = useState<Visibility>(null);
  const [tagSearch, setTagSearch] = useState<string>('');
  const [_searchParam, setSearchParam] = useSearchParams();

  function handleTypeClick() {
    setVisibiliy((vis) => (vis === 'type' ? null : 'type'));
  }
  function handleTagClick() {
    setVisibiliy((vis) => (vis === 'tag' ? null : 'tag'));
  }
  function optionsReset() {
    setTypeSelect('');
    setTagSelect([]);
    setSearchParam((param) => {
      param.delete('type');
      param.delete('tag');
      return param;
    });
  }

  useEffect(() => {
    setTypeSelect(type);
    setTagSelect(tag || []);
  }, [optionsVisible]);

  return (
    <div className={styles.container}>
      <Form className={styles['filter-form']} id="filter-form" role="search">
        {SearchIcon}
        <input
          className={styles['filter-input']}
          id="filter"
          type="search"
          name="filter"
          defaultValue={filter}
          onChange={(evt) => submit(evt.target.form)}
        />
        <button
          type="button"
          onClick={() => setOptionsVisible(!optionsVisible)}
        >
          {funnel}
        </button>
        <div
          className={`${styles.options} ${optionsVisible ? styles.show : ''}`}
        >
          <p className={styles.title}>Фильтры</p>
          <p className={styles.label}>Тип ПК</p>
          <input
            className={styles.hidden}
            id="type"
            type="search"
            name="type"
            value={typeSelect || ''}
            readOnly
          />
          <div className={styles['dropdown-container']}>
            <button
              className={styles['dropdown-button']}
              type="button"
              onClick={handleTypeClick}
            >
              {typeSelect || 'Выбрать'}
            </button>
            <ul
              className={`${styles.dropdown} ${
                visibility === 'type' ? styles.show : ''
              }`}
            >
              {compTypes.map((type) => (
                <li
                  key={type}
                  className={styles['dropdown-option']}
                  onClick={() => {
                    setTypeSelect(type);
                    setVisibiliy(null);
                  }}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <p className={styles.label}>Теги</p>
          <input
            className={styles.hidden}
            id="tag"
            type="search"
            name="tag"
            value={tagSelect.length > 0 ? JSON.stringify(tagSelect) : ''}
            readOnly
          />
          <div className={styles['dropdown-container']}>
            <button
              className={styles['dropdown-button']}
              type="button"
              onClick={handleTagClick}
            >
              {tagSelect.length > 0 ? tagSelect.join(' ') : 'Выбрать'}
            </button>
            <ul
              className={`${styles.dropdown} ${
                visibility === 'tag' ? styles.show : ''
              }`}
            >
              <input
                className={styles.tagsearch}
                type="text"
                value={tagSearch}
                onChange={(evt) => setTagSearch(evt.target.value)}
              />
              {compTags.map((tag) => {
                if (tagSearch && !tag.includes(tagSearch)) return;
                return (
                  <li
                    key={tag}
                    className={styles['dropdown-option']}
                    onClick={() => {
                      setTagSelect((tags) => {
                        if (!tags.includes(tag)) return [...tags, tag];
                        return tags.filter((ele) => ele !== tag);
                      });
                      // setTagVisible(false);
                    }}
                  >
                    <Tag tag={tag} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.buttons}>
            <button type="submit" className={styles.submit}>
              Применить
            </button>
            <button
              type="button"
              onClick={optionsReset}
              className={styles.reset}
            >
              Сбросить
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
