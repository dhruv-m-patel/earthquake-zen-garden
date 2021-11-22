import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import DefaultHelmet from '../DefaultHelmet';
import styles from './Page.css';
import { DataPropType, ProfilePropType, SitePropType } from '../../prop-types';
import PageContext from '../../context/PageContext';
import HeaderNavigation from '../HeaderNavigation';

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
        {isFetchingConfiguration && <p>Fetching site data...</p>}
        {!!config && !!Object.keys(config).length && (
          <React.Fragment>
            <HeaderNavigation />
            <div className={cx('content')}>{children}</div>
          </React.Fragment>
        )}
      </div>
    </PageContext.Provider>
  );
}

Page.propTypes = {
  isFetchingConfiguration: PropTypes.bool,
  error: PropTypes.string,
  config: PropTypes.shape({
    site: SitePropType.isRequired,
    profile: ProfilePropType.isRequired,
    data: DataPropType.isRequired,
  }),
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
