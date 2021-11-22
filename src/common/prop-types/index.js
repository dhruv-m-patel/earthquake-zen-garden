import PropTypes from 'prop-types';

export const HistoryPropType = {
  propType: PropTypes.shape({
    length: PropTypes.number,
    action: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.shape({}), // dynamic data provided with push/pop state
    }),
    push: PropTypes.func,
    replace: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    block: PropTypes.func,
  }),
  defaultProp: {
    length: undefined,
    action: undefined,
    location: {
      pathname: undefined,
      search: undefined,
      hash: undefined,
      state: undefined,
    },
    push: () => {},
    replace: () => {},
    go: () => {},
    goBack: () => {},
    goForward: () => {},
    block: () => {},
  },
};

export const SitePropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  logoImage: PropTypes.string.isRequired,
});

export const ProfilePropType = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatarImage: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
});

export const MetadataPropType = PropTypes.shape({
  generated: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  api: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
});

export const FeaturePropType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  properties: PropTypes.shape({
    mag: PropTypes.number,
    place: PropTypes.string,
    time: PropTypes.number,
    updated: PropTypes.number,
    tz: PropTypes.number,
    url: PropTypes.string,
    detail: PropTypes.string,
    status: PropTypes.string,
    tsunami: PropTypes.number,
    sig: PropTypes.number,
    net: PropTypes.string,
    code: PropTypes.string,
    ids: PropTypes.string,
    sources: PropTypes.string,
    types: PropTypes.string,
    nst: PropTypes.number,
    dmin: PropTypes.number,
    rms: PropTypes.number,
    gap: PropTypes.number,
    magType: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
  }),
  geometry: PropTypes.shape({
    type: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number),
  }),
  id: PropTypes.string,
});

export const DataPropType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  metadata: MetadataPropType,
  features: PropTypes.arrayOf(FeaturePropType),
  bbox: PropTypes.arrayOf(PropTypes.number),
});
