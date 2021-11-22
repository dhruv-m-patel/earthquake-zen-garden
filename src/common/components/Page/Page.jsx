import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import DefaultHelmet from '../DefaultHelmet';
import styles from './Page.css';

const cx = classnames.bind(styles);

export default function Page({ title, children }) {
  return (
    <div className={cx('app')}>
      <DefaultHelmet title={title} />
      <header className={cx('appHeader')}>
        <h2>Earthquake Zen Garden</h2>
      </header>
      <br />
      <br />
      <div className={cx('content')}>{children}</div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Page.defaultProps = {
  title: undefined,
};
