import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';

function mapStateToProps({ config }) {
  return {
    profile: config.data?.profile,
  };
}

export default connect(mapStateToProps)(ProfilePage);
