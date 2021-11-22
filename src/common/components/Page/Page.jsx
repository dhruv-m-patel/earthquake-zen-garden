import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import DefaultHelmet from '../DefaultHelmet';
import styles from './Page.css';
import { DataPropType, ProfilePropType, SitePropType } from '../../prop-types';
import PageContext from '../../context/PageContext';

const cx = classnames.bind(styles);

export default function Page({
  isFetchingConfiguration,
  error,
  config,
  fetchSiteConfiguration,
  title,
  children,
}) {
  useEffect(() => {
    if (!isFetchingConfiguration && !error && !config) {
      fetchSiteConfiguration();
    }
  }, [isFetchingConfiguration, error, config, fetchSiteConfiguration]);

  return (
    <PageContext.Provider value={{ config }}>
      <div className={cx('app')}>
        <DefaultHelmet title={title} />
        <header className={cx('appHeader')}>
          <h2>Earthquake Zen Garden</h2>
        </header>
        <br />
        <br />
        <div className={cx('content')}>{children}</div>
      </div>
    </PageContext.Provider>
  );
}

Page.propTypes = {
  isFetchingConfiguration: PropTypes.bool,
  error: PropTypes.string,
  config: {
    site: SitePropType.isRequired,
    profile: ProfilePropType.isRequired,
    data: DataPropType.isRequired,
  },
  fetchSiteConfiguration: PropTypes.func,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Page.defaultProps = {
  isFetchingConfiguration: false,
  error: undefined,
  config: undefined,
  fetchSiteConfiguration: () => {},
  title: undefined,
};
