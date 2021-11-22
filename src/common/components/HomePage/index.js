import { connect } from 'react-redux';
import HomePage from './HomePage';

function mapStateToProps({ config }) {
  return {
    config: config.data,
  };
}

export default connect(mapStateToProps)(HomePage);
