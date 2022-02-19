import React from 'react';

//components
import { useFetch } from './hooks/useFetch';
//styles
import styles from './Urls.module.css';

const Urls = () => {
  const { data, error, loading } = useFetch('http://localhost:5000/shorturls');
  console.log(data);

  return (
    <ul className={styles['url-container']}>
      <li className={styles['url-title']}>
        <span className={styles['complete-url-title']}>Full Url</span>
        <span className={styles['short-url-title']}>Short Url</span>
      </li>
      {data.shorturls &&
        data.shorturls.map((link) => (
          <li className={styles.url} key={link._id.$oid}>
            <span className={styles['complete-url']}>
              <a href={link.URL}>{link.URL}</a>
            </span>
            <span className={styles['short-url']}>
              <a href={link.short}>{link.short}</a>
            </span>
          </li>
        ))}
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </ul>
  );
};

export default Urls;
