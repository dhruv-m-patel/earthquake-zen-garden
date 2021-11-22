import classnames from 'classnames/bind';
import React, { useContext } from 'react';
import PageContext from '../../context/PageContext';
import styles from './HeaderNavigation.css';

const cx = classnames.bind(styles);

export default function HeaderNavigation() {
  const {
    config: {
      site: { title, logoImage },
      profile: { firstName, lastName },
    },
  } = useContext(PageContext);

  return (
    <div className={cx('header')}>
      <div className={cx('logo')}>
        <a href="/" rel="noreferrer noopener">
          <img src={logoImage} alt="Logo" />
        </a>
      </div>
      <div className={cx('title')}>
        <h1>
          <a href="/">{title}</a>
        </h1>
      </div>
      <div className={cx('userDetails')}>
        <a href="/profile" rel="noreferrer noopener">
          {firstName} {lastName}
        </a>
      </div>
    </div>
  );
}
