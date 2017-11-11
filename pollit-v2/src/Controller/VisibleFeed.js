import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Model imports
import * as feedActions from "Model/actions/feedActions";

// View imports
import Feed from "View/Feed/Feed";

function mapStateToProps(state) {
  return {
    feedItems: state.feedItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    feedActions: bindActionCreators(feedActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
