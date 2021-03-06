import React from 'react';
import classnames from 'classnames/bind';
import Page from '../Page';
import styles from './HomePage.css';
import PropTypes from 'prop-types';
import { DataPropType, ProfilePropType, SitePropType } from '../../prop-types';
import formatDate from '../../../lib/utils/formatDate';

const cx = classnames.bind(styles);

export default function HomePage({ config }) {
  const features = config?.data?.features;

  return (
    !!features?.length && (
      <Page title={config.data.metadata.title}>
        <div className={cx('homePage')}>
          <table className={cx('table')}>
            <thead>
              <th>Title</th>
              <th>Magnitude</th>
              <th>Time</th>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.id}>
                  <td>
                    <a href={`/detail/${feature.id}`} rel="noopener noreferrer">
                      {feature.properties.place}
                    </a>
                  </td>
                  <td>{feature.properties.mag}</td>
                  <td>{formatDate(feature.properties.time)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Page>
    )
  );
}

HomePage.propTypes = {
  config: PropTypes.shape({
    site: SitePropType.isRequired,
    profile: ProfilePropType.isRequired,
    data: DataPropType.isRequired,
  }),
};

HomePage.defaultProps = {
  config: undefined,
};
