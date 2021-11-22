import React, { useEffect } from 'react';
import Page from '../Page';
import PropTypes from 'prop-types';
import { DataPropType, ProfilePropType, SitePropType } from '../../prop-types';

export default function HomePage({
  config,
  isFetchingConfiguration,
  error,
  fetchSiteConfiguration,
}) {
  useEffect(() => {
    if (!isFetchingConfiguration && !error && !config) {
      fetchSiteConfiguration();
    }
  }, [isFetchingConfiguration, error, config, fetchSiteConfiguration]);

  if (!config) {
    return <Page>Fetching site configuration...</Page>;
  }

  return <Page>Home Page</Page>;
}

HomePage.propTypes = {
  isFetchingConfiguration: PropTypes.bool,
  error: PropTypes.string,
  config: {
    site: SitePropType.isRequired,
    profile: ProfilePropType.isRequired,
    data: DataPropType.isRequired,
  },
  fetchSiteConfiguration: PropTypes.func,
};

HomePage.defaultProps = {
  isFetchingConfiguration: false,
  error: undefined,
  config: undefined,
  fetchSiteConfiguration: () => {},
};
