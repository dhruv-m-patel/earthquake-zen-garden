import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { ProfilePropType } from '../../prop-types';
import Page from '../Page';
import styles from './ProfilePage.css';

const cx = classnames.bind(styles);

const BioDetail = ({ property, value }) => (
  <div className={cx('bioDetail')}>
    <div className={cx('property')}>{property}</div>
    <div className={cx('value')}>{value}</div>
  </div>
);

BioDetail.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default function ProfilePage({ profile }) {
  return (
    <Page title="Profile">
      {!!profile && (
        <div className={cx('profilePage')}>
          <div className={cx('avatar')}>
            <img src={profile.avatarImage} alt="avatar" />
          </div>
          <div className={cx('bio')}>
            <BioDetail property="First Name" value={profile.firstName} />
            <BioDetail property="Last Name" value={profile.lastName} />
            <BioDetail property="Phone" value={profile.phone} />
            <BioDetail property="Email" value={profile.email} />
            <BioDetail property="Bio" value={profile.bio} />
          </div>
        </div>
      )}
    </Page>
  );
}

ProfilePage.propTypes = {
  profile: ProfilePropType,
};

ProfilePage.defaultProps = {
  profile: undefined,
};
