import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default function DefaultHelmet({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

DefaultHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

DefaultHelmet.defaultProps = {
  title: 'Earthquake Zen Garden',
};
