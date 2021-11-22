import { connect } from 'react-redux';
import { fetchConfiguration } from '../../../client/redux/actions';
import Page from './Page';

function mapStateToProps({ config }) {
  return {
    isFetchingConfiguration: config.isFetching,
    config: config.data,
    error: config.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSiteConfiguration: () => dispatch(fetchConfiguration()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
