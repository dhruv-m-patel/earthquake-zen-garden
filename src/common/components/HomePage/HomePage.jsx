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
    <Page>
      {!!features?.length && (
        <div className={cx('homePage')}>
          <h2 className={cx('title')}>{config.data.metadata.title}</h2>
          <br />
          <br />
          <table className={cx('table')}>
            <thead>
              <th>Title</th>
              <th>Magnitude</th>
              <th>Time</th>
            </thead>
            <tbody>
              {config.data.features.map((feature) => (
                <tr key={feature.id}>
                  <td>
                    <a href={`/detail/${feature.id}`} rel="noopener noreferrer">
                      {feature.properties.title.substr(8)}
                    </a>
                  </td>
                  <td>{feature.properties.mag}</td>
                  <td>{formatDate(feature.properties.time)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Page>
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
