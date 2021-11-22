import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import {
  DataPropType,
  FeaturePropType,
  ProfilePropType,
  SitePropType,
} from '../../prop-types';
import Page from '../Page';
import styles from './DetailPage.css';
import formatDate from '../../../lib/utils/formatDate';

const cx = classnames.bind(styles);

const FeatureDetail = ({ property, value }) => (
  <div className={cx('featureDetail')}>
    <div className={cx('property')}>{property}</div>
    <div className={cx('value')}>{value}</div>
  </div>
);

FeatureDetail.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default function DetailPage({ featureId, config }) {
  const feature = config?.data?.features?.find((f) => f.id === featureId);
  return (
    <Page title={feature?.properties?.title}>
      {!!feature && (
        <div className={cx('detailPage')}>
          <FeatureDetail property="Title" value={feature.properties.title} />
          <FeatureDetail property="Magnitude" value={feature.properties.mag} />
          <FeatureDetail
            property="Time"
            value={formatDate(feature.properties.time)}
          />
          <FeatureDetail property="Status" value={feature.properties.status} />
          <FeatureDetail
            property="Tsunami"
            value={feature.properties.tsunami}
          />
          <FeatureDetail property="Type" value={feature.properties.type} />
        </div>
      )}
    </Page>
  );
}

DetailPage.propTypes = {
  featureId: PropTypes.string.isRequired,
  config: PropTypes.shape({
    site: SitePropType.isRequired,
    profile: ProfilePropType.isRequired,
    data: DataPropType.isRequired,
  }),
};

DetailPage.defaultProps = {
  config: undefined,
};
