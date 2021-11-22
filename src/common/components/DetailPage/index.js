import { connect } from 'react-redux';
import DetailPage from './DetailPage';

function mapStateToProps({ config }, { match }) {
  return {
    featureId: match.params.id,
    config: config.data,
  };
}

export default connect(mapStateToProps)(DetailPage);
